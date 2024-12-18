/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dash_shrtcts', {
    cos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dtr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    excessapp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    excesscredit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leaves: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ob: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    utilities: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'dash_shrtcts'
  });
};
