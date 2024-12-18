/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('announcementfile1', {
    active: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    announce_docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dte_posted: {
      type: DataTypes.DATE,
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
    tableName: 'announcementfile1'
  });
};
