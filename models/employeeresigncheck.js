/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeresigncheck', {
    datesubmitted: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    duedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    issubmitted: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lstcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lstdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeresigncheck'
  });
};
