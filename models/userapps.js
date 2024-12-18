/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userapps', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    companyname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dbtype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dbname: {
      type: DataTypes.STRING(50),
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
    appimg: {
      type: DataTypes.TEXT,
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
    outsource: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userapps'
  });
};
