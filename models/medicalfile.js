/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicalfile', {
    medcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "medicalfile_medcde_subdrycde_unique"
    },
    meddesc: {
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
      unique: "medicalfile_medcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'medicalfile'
  });
};
