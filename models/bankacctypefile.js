/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bankacctypefile', {
    bnkacttypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bnkacttypdsc: {
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
    tableName: 'bankacctypefile'
  });
};
