/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sum_perfevalfile3', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    perfdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demeritdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    goal_percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    goal_percent_ave: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cancel_reason1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    orig_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sum_perfevalfile3'
  });
};
