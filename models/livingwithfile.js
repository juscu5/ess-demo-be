/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livingwithfile', {
    livingwithcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    livingwithdsc: {
      type: DataTypes.STRING(30),
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
    tableName: 'livingwithfile'
  });
};
