/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcstd_testing', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    xdatetime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vcstd_testing'
  });
};
