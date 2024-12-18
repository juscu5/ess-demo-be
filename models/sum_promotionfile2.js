/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sum_promotionfile2', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    promdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exposure: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sum_promotionfile2'
  });
};
