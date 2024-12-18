/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('positionfile4', {
    educreqcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    poscode: {
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
    tableName: 'positionfile4'
  });
};
