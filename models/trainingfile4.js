/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfile4', {
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
    filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filepath: {
      type: DataTypes.TEXT,
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
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingfile4'
  });
};
