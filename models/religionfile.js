/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('religionfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    religion: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "religionfile_religion_subdrycde_unique"
    },
    religiondesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "religionfile_religion_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'religionfile'
  });
};
