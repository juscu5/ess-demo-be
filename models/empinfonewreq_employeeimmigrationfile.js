/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_employeeimmigrationfile', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doctype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    elgrevdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    elgstat: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    expdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    issby: {
      type: DataTypes.STRING(50),
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
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: false
    },
    trndtetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_employeeimmigrationfile'
  });
};
