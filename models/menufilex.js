/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menufilex', {
    linenum: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00000
    },
    mencap: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mengrp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    menidx: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "0"
    },
    menlvl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mennum: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    menprg: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mensub: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'menufilex'
  });
};
