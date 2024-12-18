
const {models} = require('../database/database');
const { signToken } = require('./auth');

const {encryptSHA1} = require('../utilities/enryption');

// Receive the body object of req
const login = async (req) => {

    try {
        const findUser = await models.users_ess.findOne({where : {
            usrcde: req.usrcde,
            usrpwd: encryptSHA1(req.usrpwd)
        }, raw: true},);


        if(!findUser){
            return {err: {
                code: 401,
                status: "No user found"
            }, data: findUser}
        }

        
        const token = signToken(findUser);
        console.log(token);

 
        return {err: null, data: {
                code: 200,
                status: "Successfully logged in",
                payload: {
                    BearerToken: token
                }
            }
        }
    } catch (error) {
        console.log(error, req);
        return {err: {
            code: 500,
            status: error.message
        }, data: null};
    }
}

const getMe = async(usrcde) => {
    const findUser = await models.users_ess.findOne({where : {
        usrcde: usrcde,
    }, raw: true});

    return findUser;
}
const getEmployeeMe = async(usrcde) => {
    const findEmployee = await models.employeefile.findOne({where : {
        empcode: usrcde,
    }, raw: true});

    return findEmployee;
}


module.exports = {
    login, getMe, getEmployeeMe
}