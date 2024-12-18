/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bncnt_perfevalfile3', {
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
    lead_val: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bncnt_perfevalfile3'
  });
};
