/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ratingsfile', {
    abs: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    atla_cd: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    atla_oa: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    atla_pc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    atla_pch: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empstats: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    finalrtg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    mla_cd: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    mla_oa: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    mla_pc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    mla_pch: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    prevrtg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ratee_cd: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ratee_oa: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ratee_pc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ratee_pch: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tard: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ucp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ut: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ratingsfile'
  });
};
