/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('violationstatusfile', {
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
    viostatcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    viostatdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'violationstatusfile'
  });
};
