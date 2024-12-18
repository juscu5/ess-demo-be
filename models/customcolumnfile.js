/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customcolumnfile', {
    colinfo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    columnorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    locked: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mascode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customcolumnfile'
  });
};
