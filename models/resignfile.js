/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resignfile', {
    lstcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "resignfile_lstcde_subdrycde_unique"
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
      unique: "resignfile_lstcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'resignfile'
  });
};
