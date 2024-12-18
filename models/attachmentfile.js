/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachmentfile', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doccode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filepath: {
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
    }
  }, {
    sequelize,
    tableName: 'attachmentfile'
  });
};
