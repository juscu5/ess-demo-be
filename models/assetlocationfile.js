/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetlocationfile', {
    locationcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "assetlocationfile_locationcde_subdrycde_unique"
    },
    locationdsc: {
      type: DataTypes.STRING(200),
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
      allowNull: true,
      unique: "assetlocationfile_locationcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'assetlocationfile'
  });
};
