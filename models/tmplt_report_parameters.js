/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_report_parameters', {
    field01: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field02: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field03: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field04: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field05: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field06: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field07: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field08: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field09: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field10: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field11: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field12: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field13: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field14: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field15: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field16: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field17: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field18: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field19: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    field20: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    logdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repprg: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmplt_report_parameters'
  });
};
