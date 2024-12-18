/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_atm', {
    alt_addr: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    alt_bdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alt_birthplace: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    alt_iddateexp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alt_iddateissue: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alt_idno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    alt_idtype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    alt_name: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    alt_occupation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alt_remrelation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alt_sssno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    alt_telno: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    alt_tinno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    atmgrp: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bankcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bnkactname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bnkacttypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empatmno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    excessamt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    includeatm: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    multiatmamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    multiatmper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    multiatmtyp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmpnetpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'employee_atm'
  });
};
