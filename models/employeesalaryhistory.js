/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeesalaryhistory', {
    adddaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    addearnings: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    addmonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    computationtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    converd1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    converd2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    dailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    earningsamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empdailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empmonthlyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    emprate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    encodedate: {
      type: DataTypes.DATEONLY,
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
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    manualentry: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    monthlyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    newdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    newearnings: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    newmonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    posdatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    posdateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    posdesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salarydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    salarydatestr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeesalaryhistory'
  });
};
