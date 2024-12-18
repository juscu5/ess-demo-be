/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paytran_computation', {
    companycode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    comptext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fldtxt01: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fldtxt02: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fldtxt03: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    num01: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    num02: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num03: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num04: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num05: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrollrun: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paytran_computation'
  });
};
