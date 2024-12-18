/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpreportfile4', {
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
    txt_15: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_16A: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_16B: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_16C: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_17: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_18: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_19: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_20: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_21A: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_21B: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_22: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_23: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_24A: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_24B: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_24C: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_24D: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    txt_25: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    x2316_36: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    x2316_40: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_13th: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_addtaxben: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_bas: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_ben: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_dm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_13th: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_bas: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_ben: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_dm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_holpay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_nd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_ph: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_pi: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_regot: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_sss: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_mwe_td: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_othreg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_ph: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_pi: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_sss: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_sup: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    xy_td: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpreportfile4'
  });
};
