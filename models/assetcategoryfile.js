/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetcategoryfile', {
    categorycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "assetcategoryfile_categorycde_subdrycde_unique"
    },
    categorydsc: {
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
      unique: "assetcategoryfile_categorycde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'assetcategoryfile'
  });
};
