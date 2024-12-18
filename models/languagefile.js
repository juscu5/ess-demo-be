/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('languagefile', {
    langcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    langcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "languagefile_langcode_subdrycde_unique"
    },
    langdesc: {
      type: DataTypes.STRING(150),
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
      unique: "languagefile_langcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'languagefile'
  });
};
