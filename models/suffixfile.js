/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suffixfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "suffixfile_suffixcde_subdrycde_unique"
    },
    suffixcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "suffixfile_suffixcde_subdrycde_unique"
    },
    suffixdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'suffixfile'
  });
};
