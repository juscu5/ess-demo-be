/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetbrandfile', {
    brandcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "assetbrandfile_brandcde_subdrycde_unique"
    },
    branddsc: {
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
      unique: "assetbrandfile_brandcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'assetbrandfile'
  });
};
