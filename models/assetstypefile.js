/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetstypefile', {
    asset_typcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "assetstypefile_asset_typcode_subdrycde_unique"
    },
    asset_typdesc: {
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
      unique: "assetstypefile_asset_typcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'assetstypefile'
  });
};
