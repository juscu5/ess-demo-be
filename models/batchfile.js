/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batchfile', {
    batchcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "batchfile_subdrycde_batchcde_unique"
    },
    batchdsc: {
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
      unique: "batchfile_subdrycde_batchcde_unique"
    }
  }, {
    sequelize,
    tableName: 'batchfile'
  });
};
