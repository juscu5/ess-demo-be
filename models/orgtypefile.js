/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgtypefile', {
    orgtypcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    orgtypdsc: {
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orgtypefile'
  });
};
