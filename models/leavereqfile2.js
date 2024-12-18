/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('leavereqfile2', {
    ampm: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    apvdays: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    apvdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    apvhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cancel_reason1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    inampm: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    inhour: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    inmiltime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    inmin: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    is_advanced: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_late: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lday: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    leavedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    leavedays: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leavedocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leavehours: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leaves: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leavetyp2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    less_break: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    outampm: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    outhour: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    outmiltime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    outmin: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    procdte: {
      type: DataTypes.STRING(50),
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
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmp_apv_dys: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmp_apv_hrs: {
      type: DataTypes.DECIMAL,
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
    leavestatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    leavestatus_days: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'leavereqfile2',
    timestamps: false,
  });
};