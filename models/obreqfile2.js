/* jshint indent: 2 */
const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('obreqfile2', {
    apvdays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    apvdte: {
      type: DataTypes.DATEONLY,
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
    cday: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    client_add: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    client_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conper: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(20),
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
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numbreak: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    obdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obhours: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    obin1: {
      type: DataTypes.STRING(20),
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
    obin6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    obindate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obinmiltime1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    obinmiltime2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    obinmiltime3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    obinmiltime4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    obinmiltime5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    obinmiltime6: {
      type: DataTypes.STRING(20),
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
    obout6: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oboutdate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    oboutmiltime1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oboutmiltime2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oboutmiltime3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oboutmiltime4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oboutmiltime5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oboutmiltime6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    obtypcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obtype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obtypecde: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(20),
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
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    telno: {
      type: DataTypes.STRING(20),
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
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'obreqfile2',
    timestamps: false
  });
};
