/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantstatusfile', {
    appstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "applicantstatusfile_appstatcde_subdrycde_unique"
    },
    appstatdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
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
      unique: "applicantstatusfile_appstatcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'applicantstatusfile'
  });
};
