/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bncnt_perfevalfile1', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    perfevaldocnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tsdocnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tsdocnum_order: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rating_item: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bncnt_perfevalfile1'
  });
};
