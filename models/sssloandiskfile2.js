/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sssloandiskfile2', {
    amortization: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amramt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    diskno: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcom: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    loanamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    loantype: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    midint: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    orgamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    org_penamt: {
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
    penamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    prnsta: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remark: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    repmon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    reptyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    repyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sssloandiskfile2'
  });
};
