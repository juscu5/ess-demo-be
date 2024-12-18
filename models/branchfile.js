/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branchfile', {
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "branchfile_branchcde_subdrycde_unique"
    },
    branchdesc: {
      type: DataTypes.STRING(200),
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
      unique: "branchfile_branchcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'branchfile'
  });
};
