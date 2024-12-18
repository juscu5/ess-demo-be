/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userdashboardfile', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    notifcode: {
      type: DataTypes.STRING(50),
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
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userdashboardfile'
  });
};
