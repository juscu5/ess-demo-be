const {models} = require('../database/database');
const { paginate } = require('../utilities/pagination');
const { hasNoApprover } = require('../utilities/requisition');
const { getSysparDocnum } = require('../utilities/syspar');

const getOvertimeRequestsByStatus = async (empcode, status, offset, limit) => {
  const overtimeRequests = await models.overtimefile1.findAndCountAll(
    paginate({
      where: {
        empcode: empcode,
        approve: status
      },
      order: [
        ['trndte', 'DESC']
      ],
      include: [models.overtimereqfile2]
    }, { page: offset, pageSize: limit })
  );

  const noApprover = await hasNoApprover(empcode);
  
  return {
    ot_reqs: overtimeRequests.rows,
    no_approver: noApprover
  }
}

const getOvertimeRequestsByFilter = async (empcode, status, filter, value, offset, limit) => {
  const filters = [
    {filter: 'filing_date', field: 'trndte'}, 
    {filter: 'ot_date', field: 'reqstr'}, 
    {filter: 'total_req_hrs', field: 'totalhrs'}, 
    {filter: 'ot_type', field: 'otdesc'}, 
    {filter: 'doc_num', field: 'otdocnum'}
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
    include: [models.overtimereqfile2]
  }, { page: offset, pageSize: limit });

  const overtimeRequests = await models.overtimefile1.findAndCountAll(
    query
  );

  return overtimeRequests.rows;
}

const addSingleOvertimeRequest = async (overtimefile1data, overtimereqfile2data) => {
  const docnum = await getSysparDocnum('otdocnum');
  overtimefile1data.otdocnum = docnum;
  overtimereqfile2data.otdocnum = docnum;
  overtimereqfile2data.is_advanced = new Date(overtimereqfile2data.otdate) > new Date() ? 1 : 0;
  overtimereqfile2data.is_late = date < new Date() ? 1 : 0;

  await models.overtimefile1.create(overtimefile1data);
  await models.overtimereqfile2.create(overtimereqfile2data);
}

const addMultipleOvertimeRequest = async (dateFrom, dateTo, daysNotIncluded, includeHolidays, overtimefile1data, overtimereqfile2data) => {
  dateFrom = new Date(dateFrom);
  dateTo = new Date(dateTo);
  const daysDiff = Math.ceil(Math.abs(dateTo - dateFrom) / (1000 * 60 * 60 * 24));

  const docnum = await getSysparDocnum('otdocnum');
  overtimefile1data.otdocnum = docnum;
  overtimereqfile2data.otdocnum = docnum;
  // create overtimefile1data
  await models.overtimefile1.create(overtimefile1data);
  // get the holidays
  const holidays = await models.holidayfile.findAll({});

  const date = new Date(dateFrom);
  // loop through the days
  for (let i = 0; i < daysDiff+1; i++) {
    const mos = date.getMonth() + 1;
    date.setDate(date.getDate() + i);
    const dayAbbreviation = date.toLocaleDateString('en-US', { weekday: 'short' });

    if (daysNotIncluded.includes(dayAbbreviation)) continue;
    // if holidays are not included do not create overtime request if the day is a holiday
    if (includeHolidays === "0") {
      const holiday = holidays.find(h => h.holmon === mos && h.holday === date.getDate());
      if (holiday) continue;
    }

    overtimereqfile2data.cday = dayAbbreviation;
    overtimereqfile2data.otdate = date;
    overtimereqfile2data.is_advanced = date > new Date(overtimefile1data.trndte) ? 1 : 0;
    overtimereqfile2data.is_late = date < new Date(overtimefile1data.trndte) ? 1 : 0;
    await models.overtimereqfile2.create(overtimereqfile2data);
  }

}

module.exports = {
  getOvertimeRequestsByStatus,
  getOvertimeRequestsByFilter,
  addSingleOvertimeRequest,
  addMultipleOvertimeRequest
}