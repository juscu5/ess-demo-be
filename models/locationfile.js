/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locationfile', {
    loccode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "locationfile_loccode_subdrycde_unique"
    },
    locdesc: {
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
      unique: "locationfile_loccode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'locationfile'
  });
};
