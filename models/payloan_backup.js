/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payloan_backup', {
    amortization: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loandate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    loanscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loanskey: {
      type: DataTypes.STRING(50),
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
    tmpamort: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmpbalance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'payloan_backup'
  });
};
