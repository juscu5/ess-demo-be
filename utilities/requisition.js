const {models} = require('../database/database');

const hasNoApprover = async (usrcde) => {
  const usersEss = await models.users_ess.findOne({
    where: {
      usrcde: usrcde
    },
    attributes: ['no_approver']
  });

  return usersEss.no_approver === 1;
}

const isUserExists = async (empcode) => {
  const user = await models.users_ess.findOne({
    where: {
      usrcde: empcode
    }
  });

  return user;
}

const getShiftSchedule = async (empcode, subdrycde, date) => {
  const _date = new Date(date);
  const dayAbbreviation = _date.toLocaleDateString('en-US', { weekday: 'short' });

  const shiftCode = (await models.employeefile.findOne({
    where: {
      empcode: empcode
    },
    attributes: ['shiftcode']
  })).shiftcode;

  const shiftSchedule = await models.shiftfile2.findOne({
    where: {
      shiftcode: shiftCode,
      subdrycde: subdrycde,
      shiftcday: dayAbbreviation.toLocaleUpperCase()
    },
    attributes: ['shiftcode', 'reghrs', 'breakhours', 'rtstarttimein', 'rttimein1', 'rttimeout1', 'rttimein2', 'rttimeout2']
  });

  return shiftSchedule;
}

module.exports = {
  hasNoApprover,
  isUserExists,
  getShiftSchedule
}