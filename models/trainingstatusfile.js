/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingstatusfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "trainingstatusfile_trnstatcde_subdrycde_unique"
    },
    trnstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "trainingstatusfile_trnstatcde_subdrycde_unique"
    },
    trnstatdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingstatusfile'
  });
};
