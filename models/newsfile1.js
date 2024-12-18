/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('newsfile1', {
    active: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dte_posted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    news_docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    posted_by: {
      type: DataTypes.STRING(255),
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
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'newsfile1'
  });
};
