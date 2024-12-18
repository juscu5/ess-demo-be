/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syspar_integ', {
    assignallowance: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assigncomptype: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assigndeductions: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assigndept: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assignearnings: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assigngovcont: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assignleaves: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assignloans: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assignpaygrp: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assignpiecerate: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    assign_cost_cent: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "HRIS"
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'syspar_integ'
  });
};
