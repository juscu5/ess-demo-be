/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prefixfile', {
    prefixcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "prefixfile_prefixcde_subdrycde_unique"
    },
    prefixdsc: {
      type: DataTypes.STRING(100),
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
      unique: "prefixfile_prefixcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'prefixfile'
  });
};
