/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payearningspar', {
    empcode1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empcode2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    inactive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'payearningspar'
  });
};
