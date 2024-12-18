/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estyearlytax2', {
    basic: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    copypaytran: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estbenefits: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    estcontri: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    estyearlytax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    est_13thmon: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    est_otamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    est_othtaxinc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    refnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wittaxtodate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'estyearlytax2'
  });
};
