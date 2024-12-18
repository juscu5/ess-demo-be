/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classfile', {
    classcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    classdesc: {
      type: DataTypes.STRING(35),
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
    tableName: 'classfile'
  });
};
