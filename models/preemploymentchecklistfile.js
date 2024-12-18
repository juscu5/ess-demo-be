/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preemploymentchecklistfile', {
    lstcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "preemploymentchecklistfile_lstcde_subdrycde_unique"
    },
    lstdsc: {
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
      unique: "preemploymentchecklistfile_lstcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'preemploymentchecklistfile'
  });
};
