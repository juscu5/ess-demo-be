/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menubar2', {
    linenum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    menbargrp: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    mensort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mensub: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menutype: {
      type: DataTypes.STRING(15),
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
    }
  }, {
    sequelize,
    tableName: 'menubar2'
  });
};
