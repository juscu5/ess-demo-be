/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('announcementfile2', {
    announce_docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
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
    tableName: 'announcementfile2'
  });
};
