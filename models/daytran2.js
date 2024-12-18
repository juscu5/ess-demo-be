/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daytran2', {
    actdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ampm: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
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
    apvdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    apvhrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    disapprved_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dtetim: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    in_out: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    iscancel: {
      type: DataTypes.STRING(30),
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
      type: DataTypes.STRING(10),
      allowNull: true
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    locationid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no_approver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydte: {
      type: DataTypes.DATEONLY,
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
    reqlognum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "daytran2_reqlognum_unique"
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "0"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    timeio: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    timereg: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tmp_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
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
    updsta: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'daytran2'
  });
};
