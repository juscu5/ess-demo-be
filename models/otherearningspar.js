/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otherearningspar', {
    earningscode: {
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
    tableName: 'otherearningspar'
  });
};
