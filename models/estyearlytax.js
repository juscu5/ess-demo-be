/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estyearlytax', {
    creditmonthfrom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    creditmonthto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    remarks: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estyearlytax'
  });
};
