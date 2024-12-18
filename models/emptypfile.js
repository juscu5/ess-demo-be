/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emptypfile', {
    emptyp: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "emptypfile_subdrycde_emptyp_unique"
    },
    emptypdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "emptypfile_subdrycde_emptyp_unique"
    }
  }, {
    sequelize,
    tableName: 'emptypfile'
  });
};
