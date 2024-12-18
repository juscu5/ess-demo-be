/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('overtimereqfile2', {
    actdtenxtday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    actdteprvday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    appempcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    apvdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    apvhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    cancel_reason1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cday: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    expectedoutput: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hours: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    is_earlyot: {
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
    is_manual: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_modified: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    less_break: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    man_empcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    man_fullname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    obin1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obin2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obin3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obin4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obin5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obinmiltime1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obinmiltime2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obinmiltime3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obinmiltime4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obinmiltime5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obout1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obout2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obout3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obout4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    obout5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oboutmiltime1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oboutmiltime2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oboutmiltime3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oboutmiltime4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oboutmiltime5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    otdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    otdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otindate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    otoutdate1: {
      type: DataTypes.DATEONLY,
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
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmp_apv_hr2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tmp_apv_hrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmp_apv_mns: {
      type: DataTypes.INTEGER,
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
    vwhours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vwminutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    temp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'overtimereqfile2',
    timestamps: false,
  });
};