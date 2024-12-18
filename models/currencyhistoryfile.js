/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currencyhistoryfile', {
    curcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    curdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    currte: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'currencyhistoryfile'
  });
};
