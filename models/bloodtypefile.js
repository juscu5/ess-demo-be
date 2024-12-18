/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bloodtypefile', {
    bloodtypecde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "bloodtypefile_bloodtypecde_subdrycde_unique"
    },
    bloodtypedsc: {
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
      unique: "bloodtypefile_bloodtypecde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'bloodtypefile'
  });
};
