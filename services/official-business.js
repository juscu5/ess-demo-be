

const {models} = require('../database/database');
const {Op} = require('sequelize');
const { getMe, getEmployeeMe } = require('./user-ess');
const { getSysparDocnum } = require('../utilities/syspar');

const {format, formatISO, startOfDay, endOfDay} = require('date-fns');
const { paginate } = require('../utilities/pagination');


const getOfficialBusinessApprovalRequest = async (usrcde) => {

    try {

        const findSubordinates = await models.approver_policy_file4.findAll({where : { appempcode: usrcde, trntyp: "Official Business"}, raw: true});
        const mapSubordinates = findSubordinates.map(d=> d.empcode);

        const findBusinessRequest = await models.obfile1.findAll({where: {
            empcode: {
                [Op.in]: mapSubordinates
            },
        }, order: ['recid'], raw: true});

        return findBusinessRequest;


    } catch (error) {
        console.log("errror", error);
    }

}

const getOfficialBusinessRequest = async (usrcde,options) => {
    try {
        const { offset, limit, filterType, status, filterData } = options || {};
        const whereClause = { empcode: usrcde };

        let query = null;

        if (filterType && filterData !== undefined) {

            let startDay = null;

            if(filterType=="trndte"){
                query = new Date(filterData);
                startDay = format(startOfDay(query), 'yyyy-MM-dd HH:mm:ss');
                query = startDay

            }
            else{
                query = {[Op.like]: `%${filterData}%`};
            }

            // Add filter only if filterData is defined
            whereClause[filterType] = query
        }

        const findMe = await models.obfile1.findAndCountAll(paginate({
            where: whereClause,
            include: [models.obreqfile2]
        }, { page: offset||0, pageSize: limit||10 }));

        return findMe.rows;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
}

const postSingleRequest = async (data, empcode) => {
    try{
        // const {fullname} = await getMe(empcode);
        const me = await getEmployeeMe(empcode);
        const obdocnum = await getSysparDocnum('obdocnum');

        const newDate = new Date(Date.now());
        const formattedNowDate = format(newDate, 'yyyy-MM-dd 00:00:00');
        const formattedNowTime = format(newDate, 'hh:mm:ssa');
        const formattedDay = format(newDate, 'EEE');

        const newObfile1 = {
            approve: 'PENDING',
            client_add: data.client_add,
            client_name: data.client_name,
            conper: data.conper,
            fullname: me.fullname,
            reqdtefrm: data.reqdtefrm,
            reqdteto: data.reqdteto,
            subdrycde: data.subdrycde,
            trndte: formattedNowDate,
            trntime: formattedNowTime,
            trntyp: 'Official Business',
            obdocnum: obdocnum,
            empcode: me.empcode
        };

        const splitFromattedNowDate = formattedNowDate.split(" ");
        const obInDate = format(new Date(data.obin), 'yyyy-MM-dd|HHmm|hh:mm a').split("|");
        const oboutDate = format(new Date(data.obout), 'yyyy-MM-dd|HHmm|hh:mm a').split("|");

        const newObReqFile2 = {
            cday: formattedDay,
            notes: data.notes,
            empcode: me.empcode,
            is_advanced: 0,
            obdocnum: obdocnum,
            obdte: splitFromattedNowDate[0],
            obin1: obInDate[2],
            obindate1: obInDate[0],
            obinmiltime1: obInDate[1],
            obout1: oboutDate[2],
            oboutdate1: oboutDate[0],
            oboutmiltime1: oboutDate[1],
            status: "PENDING",
            trndte: format(startOfDay(splitFromattedNowDate[0]), 'yyyy-MM-dd HH:mm:ss'),
            shiftcode: me.shiftcode
        };

        await models.obfile1.create(newObfile1);
        await models.obreqfile2.create(newObReqFile2);

    }catch(e){
        console.log("Error", e);
        throw(e);
    }
}

const postBulkRequest = async (data) => {
    try{
        return await models.obfile1.bulkCreate(data);
    }catch(e){
        console.log("Error", error);
        throw(e);
    }

}


module.exports = {
    getOfficialBusinessApprovalRequest,
    getOfficialBusinessRequest,
    postSingleRequest,
    postBulkRequest

}