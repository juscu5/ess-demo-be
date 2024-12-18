/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empdefloan', {
    amortization: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    chkzerooutloan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkzerooutloanbal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    chkzerooutloanrem: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    companycode: {
      type: DataTypes.STRING(50),
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
    effcremon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    effcreyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    effdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "empdefloan_loanscode_loandate_empcode_unique"
    },
    loanamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    loandate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      unique: "empdefloan_loanscode_loandate_empcode_unique"
    },
    loanscode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "empdefloan_loanscode_loandate_empcode_unique"
    },
    loanskey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lonbal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    oldbal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    orgamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    refnum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    stoploanded: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    stoploanrem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
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
    },
    xloanamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    xstatus: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empdefloan'
  });
};
