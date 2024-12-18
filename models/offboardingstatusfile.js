/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offboardingstatusfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offboardstatcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    offboardstatdesc: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'offboardingstatusfile'
  });
};
