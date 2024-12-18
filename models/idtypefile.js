/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idtypefile', {
    idtypcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "idtypefile_subdrycde_idtypcde_unique"
    },
    idtypdsc: {
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
      unique: "idtypefile_subdrycde_idtypcde_unique"
    }
  }, {
    sequelize,
    tableName: 'idtypefile'
  });
};
