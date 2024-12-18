/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otherearnings_otpar', {
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    earningscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratescode: {
      type: DataTypes.STRING(20),
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
    tableName: 'otherearnings_otpar'
  });
};
