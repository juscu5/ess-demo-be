const { Op } = require('sequelize');
const {models} = require('../database/database');
const { paginate } = require('../utilities/pagination');
const { getSysparDocnum } = require('../utilities/syspar');
const { hasNoApprover } = require('../utilities/requisition');

const getLeaveRequestsByStatus = async (empcode, status, offset, limit) => {
  const leaveRequests = await models.leavesfile1.findAndCountAll(
    paginate({
      where: {
        empcode: empcode,
        approve: status
      },
      order: [
        ['trndte', 'DESC']
      ],
      include: [models.leavereqfile2]
    }, { page: offset, pageSize: limit })
  );

  const noApprover = await hasNoApprover(empcode);
  
  return {
    leave_reqs: leaveRequests.rows,
    no_approver: noApprover
  }
}

const getLeaveRequestsByFilter = async (empcode, status, filter, value, offset, limit) => {
  const filters = [
    {filter: 'filing_date', field: 'trndte'}, 
    {filter: 'leave_date_range', field: 'reqstr'}, 
    {filter: 'total_req_hrs', field: 'totalhrs'}, 
    {filter: 'leave_type', field: 'leavesdesc'}, 
    {filter: 'doc_num', field: 'leavedocnum'}
  ]

  const _filter = filters.find(d => d.filter === filter);
  if (!_filter) return [];

  const _value = _filter.field === 'trndte' ? new Date(value) : { [Op.like]: `%${value}%`};

  const query = paginate({
    where: {
      empcode: empcode,
      approve: status,
      [_filter.field]: _value
    },
    order: [
      ['trndte', 'DESC']
    ],
    include: [models.leavereqfile2]
  }, { page: offset, pageSize: limit });

  const leaveRequests = await models.leavesfile1.findAndCountAll(
    query
  );

  return leaveRequests.rows;
}

const getLeaveBenefits = async (empcode) => {
  const leaveType = await models.empdefleave.findAll({
    where: {
      empcode: empcode
    },
    include: [models.leavesfile]
  });

  return leaveType;
}

const getLeaveDayFile = async (subdrycde) => {
  const leaveDayFile = await models.leavedayfile.findAll({
    where: {
      subdrycde: subdrycde,
    },
  });

  return leaveDayFile;
}

const addSingleData = async (leavereqfile2data, leavesfile1data) => {
  
  const leavereqfile2dataCopy = {...leavereqfile2data};
  const leavesfile1dataCopy = {...leavesfile1data};
  leavesfile1dataCopy.leavedocnum = await getSysparDocnum('leavedocnum');
  leavereqfile2dataCopy.leavedocnum = leavesfile1dataCopy.leavedocnum;

  await models.leavereqfile2.create(leavereqfile2dataCopy);
  await models.leavesfile1.create(leavesfile1dataCopy);
}

const addMultipleData = async (dateFrom, dateTo, daysNotIncluded, includeHolidays, leavereqfile2data, leavesfile1data) => {
  dateFrom = new Date(dateFrom);
  dateTo = new Date(dateTo);
  const daysDiff = Math.ceil(Math.abs(dateTo - dateFrom) / (1000 * 60 * 60 * 24));

  const leavesfile1dataCopy = {...leavesfile1data};
  const leavereqfile2dataCopy = {...leavereqfile2data};
  leavesfile1dataCopy.leavedocnum = await getSysparDocnum('leavedocnum');
  leavereqfile2dataCopy.leavedocnum = leavesfile1dataCopy.leavedocnum;
  await models.leavesfile1.create(leavesfile1dataCopy);

  // get the holidays
  const holidays = await models.holidayfile.findAll({});

  const date = new Date(dateFrom);
  for (let i = 0; i < daysDiff+1; i++) {
    const mos = date.getMonth() + 1;
    date.setDate(date.getDate() + i);
    const dayAbbreviation = date.toLocaleDateString('en-US', { weekday: 'short' });

    if (daysNotIncluded.includes(dayAbbreviation)) continue;

    if (includeHolidays === "0") {
      const holiday = holidays.find(h => h.holmon === mos && h.holday === date.getDate());
      if (holiday) continue;
    }

    leavereqfile2dataCopy.leavedate = date;
    leavereqfile2dataCopy.lday = dayAbbreviation;
    await models.leavereqfile2.create(leavereqfile2dataCopy);
  }
}

module.exports = {
  getLeaveRequestsByStatus,
  getLeaveRequestsByFilter,
  getLeaveBenefits,
  getLeaveDayFile,
  addSingleData,
  addMultipleData,
}