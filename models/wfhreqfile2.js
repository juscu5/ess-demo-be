/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wfhreqfile2', {
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
    wfhdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wfhdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    wfhhours: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    wfhin1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhin2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhin3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhin4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhin5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhin6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    wfhindate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    wfhinmiltime1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhinmiltime2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhinmiltime3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhinmiltime4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhinmiltime5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhinmiltime6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhout1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhout2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhout3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhout4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhout5: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhout6: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wfhoutdate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    wfhoutmiltime1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhoutmiltime2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhoutmiltime3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhoutmiltime4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhoutmiltime5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wfhoutmiltime6: {
      type: DataTypes.STRING(20),
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
    tableName: 'wfhreqfile2'
  });
};
