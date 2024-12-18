/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schoolfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    schcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "schoolfile_schcode_subdrycde_unique"
    },
    schdesc: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "schoolfile_schcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'schoolfile'
  });
};
