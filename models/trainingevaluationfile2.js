/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingevaluationfile2', {
    evaldocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eval_areacode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eval_arearating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eval_subcategcode: {
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
    tableName: 'trainingevaluationfile2'
  });
};
