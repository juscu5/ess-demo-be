/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sum_perfevalpurp', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    purpcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    purpdesc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    purporder: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sum_perfevalpurp'
  });
};
