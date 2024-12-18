/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salarygradeallowance', {
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowdsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    allowfactor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    allowrate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salarycode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salarygradeallowance'
  });
};
