/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payslip_parameters', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    enable_payslipnotif: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipoffsetabs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipyeartodte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipadjinytd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipbasicday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paysliploanbal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslippaygroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipdepartment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paslipdispcomnme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipbasicrate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipempsssno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipempphno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipemppino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipemptin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paysliptaxcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paysliplabel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipatm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipleaves: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipleavescode1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipleavescode2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipcomdsclmargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipcomlogowidthadj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipcomlogolmargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipreport: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuspsadjleft: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuspsadjtop1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuspsadjtop2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuspsadjtop3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    psheaderfsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    psheader2fsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    psdetailfsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    psnetpayfsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    psfooterfsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    psheaderfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader1font: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader2font: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psdetailfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psnetpayfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psfooterfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheaderfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader1fontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader1fsize: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader2fontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psdetailfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psnetpayfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psfooterfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psliprem: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pslipsigncap: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payslip_parameters'
  });
};
