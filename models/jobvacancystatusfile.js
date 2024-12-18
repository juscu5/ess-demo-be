/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobvacancystatusfile', {
    jobstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "jobvacancystatusfile_jobstatcde_subdrycde_unique"
    },
    jobstatdsc: {
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
      unique: "jobvacancystatusfile_jobstatcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'jobvacancystatusfile'
  });
};
