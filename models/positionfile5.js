/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('positionfile5', {
    agelim: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    postypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'positionfile5'
  });
};
