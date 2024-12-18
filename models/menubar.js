/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menubar', {
    linenum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    mencap: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    menform: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mengrp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menidx: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    menkey: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mennum: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    menprg: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mensub: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menulist: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    picicon: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sidebar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    toolbar: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'menubar'
  });
};
