/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addtlallowsetupleave', {
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leavescode: {
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
    tableName: 'addtlallowsetupleave'
  });
};
