/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payallowance', {
    allowamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowqty: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    allowrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    companycode: {
      type: DataTypes.STRING(3),
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
    tmpamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmpqty: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payallowance'
  });
};
