/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cardtypefile', {
    cardcode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "cardtypefile_cardcode_subdrycde_unique"
    },
    carddescription: {
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
      unique: "cardtypefile_cardcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'cardtypefile'
  });
};
