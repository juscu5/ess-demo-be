/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincefile', {
    prov: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    provcty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "provcty_subdrycde"
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
      unique: "provcty_subdrycde"
    }
  }, {
    sequelize,
    tableName: 'provincefile'
  });
};
