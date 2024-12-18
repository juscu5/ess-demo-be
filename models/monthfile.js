/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monthfile', {
    moncde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mondesc: {
      type: DataTypes.STRING(15),
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
    tableName: 'monthfile'
  });
};
