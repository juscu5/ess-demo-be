/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicationfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    appimg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    appdir: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apploc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appstat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    companyname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    appcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appheadertitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    outsource: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    maxuser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'applicationfile'
  });
};
