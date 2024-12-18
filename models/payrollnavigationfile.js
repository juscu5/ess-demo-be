/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payrollnavigationfile', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mencap: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mengrp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mennum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    navprog: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'payrollnavigationfile'
  });
};
