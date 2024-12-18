/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantfurtherstudies', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expyear: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    furdegree: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    furschool: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    unitearn: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    untneeded: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    course: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantfurtherstudies'
  });
};
