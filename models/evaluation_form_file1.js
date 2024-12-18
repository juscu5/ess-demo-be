/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evaluation_form_file1', {
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trainingdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trncde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trndesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'evaluation_form_file1'
  });
};
