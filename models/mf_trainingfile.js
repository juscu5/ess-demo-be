/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mf_trainingfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "mf_trainingfile_trngcde_subdrycde_unique"
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "mf_trainingfile_trngcde_subdrycde_unique"
    },
    trngdsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    trntypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mf_trainingfile'
  });
};
