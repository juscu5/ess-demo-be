/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sum_perfevalfile1_log', {
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
    goaldocnum_order: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    goal_stmt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goal_percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rating_from: {
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
    log_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approver_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    approver_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sum_perfevalfile1_log'
  });
};
