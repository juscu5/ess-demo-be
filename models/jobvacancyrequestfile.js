/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobvacancyrequestfile', {
    agefrom: {
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
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    apvhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bdgeted: {
      type: DataTypes.STRING(20),
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
    canceltyp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    course: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dteneeded: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    durday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    durmonth: {
      type: DataTypes.INTEGER,
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
    employmentstatrem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filepath: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frwhorjstf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_cancel_disapprove: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_last: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jobdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    jobdsc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    justificationcde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    justificationdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    justificationdte: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    justificationrem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jvcdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    jvrdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    minyear: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    nopos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    no_approver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otherreq: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    peremp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    perfrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    perto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    postdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    postypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prevwork: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    prevworkwhn: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prhtcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    procdte: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    procdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    procdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    proscanddte: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qualif: {
      type: DataTypes.STRING(255),
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
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reqper: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    requnitcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    resvac: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    soi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    specproj: {
      type: DataTypes.STRING(255),
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
    status2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trntime: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    typeemp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    withmanbud: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    posslot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'jobvacancyrequestfile'
  });
};
