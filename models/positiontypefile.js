/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('positiontypefile', {
    postypcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "positiontypefile_postypcde_subdrycde_unique"
    },
    postypdsc: {
      type: DataTypes.STRING(30),
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
      unique: "positiontypefile_postypcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'positiontypefile'
  });
};
