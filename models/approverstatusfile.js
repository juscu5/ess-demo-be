/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approverstatusfile', {
    appstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appstatdesc1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    appstatdesc2: {
      type: DataTypes.STRING(5),
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
    tableName: 'approverstatusfile'
  });
};
