/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wfhfile1', {
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    apprved_reason: {
      type: DataTypes.TEXT,
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
    cancel_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    home_add: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rqstdby: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    deptcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    disapprved_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATE,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
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
    late: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wfhdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wfhdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "obfile1_obdocnum_unique"
    },
    wfhhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    wfhin: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    wfhout: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    wfhtypcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wfhtype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wfhtypecde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
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
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reasoncde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reqdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reqstr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    telno: {
      type: DataTypes.STRING(30),
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    viewstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    no_approver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appfullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_approverfile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wfhfile1'
  });
};
