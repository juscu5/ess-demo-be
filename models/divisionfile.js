/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('divisionfile', {
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "divisionfile_subdrycde_divcode_unique"
    },
    divdesc: {
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
      unique: "divisionfile_subdrycde_divcode_unique"
    }
  }, {
    sequelize,
    tableName: 'divisionfile'
  });
};
