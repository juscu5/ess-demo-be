/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goalsettingsfile2', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    goaldocnum: {
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
    key_res_area: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    measure: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goal_percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    timeline: {
      type: DataTypes.STRING(100),
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
    }
  }, {
    sequelize,
    tableName: 'goalsettingsfile2'
  });
};
