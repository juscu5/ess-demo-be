/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adjovertimereqfile2', {
    adjotdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    hours: {
      type: DataTypes.DECIMAL,
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
    is_manual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_posted: {
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
    otdate: {
      type: DataTypes.DATEONLY,
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
    ottype: {
      type: DataTypes.STRING(100),
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
    }
  }, {
    sequelize,
    tableName: 'adjovertimereqfile2'
  });
};
