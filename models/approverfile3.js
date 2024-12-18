/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approverfile3', {
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appfullname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dteapproval: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'approverfile3'
  });
};
