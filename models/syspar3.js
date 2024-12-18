/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syspar3', {
    colwidth: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    defpw: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailreturn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    expdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "EXP-0000000000"
    },
    expdocnumlock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inclink: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    insubcde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxothrs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maxotlock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxuthrs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maxutlock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minimumminot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minpolicyot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multi_leave: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multi_ob: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multi_wfh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multi_ot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multi_ut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oballoweddy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    otalloweddy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    otalloweddyon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    otinshow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    otoutshow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ot_tmp_hrs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rnddownot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rndpw: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sendemail: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    timeformat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    utinshow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    utoutshow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ut_tmp_hrs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewzeroballeave: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vw_pay: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    vw_pms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    withapv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_training_popout: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'syspar3'
  });
};
