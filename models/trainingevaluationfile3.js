/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingevaluationfile3', {
    essayanswer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    essaycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evaldocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'trainingevaluationfile3'
  });
};
