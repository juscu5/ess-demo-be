/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobvacancyfile', {
    agefrom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agelim: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ageto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anticipateddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approver1empcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    approver1_dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approver2empcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    approver2_dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approver3empcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    approver3_dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    course: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dteadvrtsd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dterqstd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    educattainment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employee_resigneename: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    employmentstatcde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hrngdept: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hrngmngr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hrngmngrfullname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_hr_request: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jobdsc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minyear: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    modcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modtyp: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    nopos: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    posslot: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    postypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prhtcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qualif: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qualif_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reasoncode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sccode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    soi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    spertise: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jobvacancyfile'
  });
};
