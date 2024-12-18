/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emailmessagesetupfile2', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    etitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ebody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ebody2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nline1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nline2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nline3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eregard: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    esender: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    eaddpos: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    esal: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emailmessagesetupfile2'
  });
};
