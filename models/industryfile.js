/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('industryfile', {
    indcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "industryfile_subdrycde_indcde_unique"
    },
    inddsc: {
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
      unique: "industryfile_subdrycde_indcde_unique"
    }
  }, {
    sequelize,
    tableName: 'industryfile'
  });
};
