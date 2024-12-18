/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('devicelocationfile', {
    loccode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    locdesc: {
      type: DataTypes.STRING(255),
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
    tableName: 'devicelocationfile'
  });
};
