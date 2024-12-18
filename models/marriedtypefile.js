/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marriedtypefile', {
    martypcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    martypdsc: {
      type: DataTypes.STRING(200),
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'marriedtypefile'
  });
};
