/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fluencylevelfile', {
    fluencylvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "fluencylevelfile_subdrycde_fluencylvlcde_unique"
    },
    fluencylvldsc: {
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
      unique: "fluencylevelfile_subdrycde_fluencylvlcde_unique"
    }
  }, {
    sequelize,
    tableName: 'fluencylevelfile'
  });
};
