/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('newsfile2', {
    content: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dte_posted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    file_directory: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    input_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    news_docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    style: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    view_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'newsfile2'
  });
};
