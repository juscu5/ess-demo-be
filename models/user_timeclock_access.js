/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_timeclock_access', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    has_access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    has_cam: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'user_timeclock_access'
  });
};
