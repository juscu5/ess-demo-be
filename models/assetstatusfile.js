/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetstatusfile', {
    asset_stacode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "assetstatusfile_asset_stacode_subdrycde_unique"
    },
    asset_stadesc: {
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
      allowNull: true,
      unique: "assetstatusfile_asset_stacode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'assetstatusfile'
  });
};
