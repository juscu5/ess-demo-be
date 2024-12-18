/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeefilesub', {
    abaddbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abaddbasisdailyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abaddbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abaddbasismonthlyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abbasisdailyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abbasismonthlyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    atmprefix2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    case_emer2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    case_emer3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cashbondcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cashbondrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dailyhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    emer_add2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    emer_add3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    emer_tel2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emer_tel3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empatmnosav: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcontactrel1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empcontactrel2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empcontactrel3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    emppic: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empprefix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emppwd: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empsuffix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estpayrollperiod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jobcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leaveaddbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leaveaddbasisdailyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leaveaddbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leaveaddbasismonthlyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leavebasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leavebasisdailyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leavebasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leavebasismonthlyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    multiatm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    multiatmtyp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    otaddbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otaddbasisdailyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otaddbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otaddbasismonthlyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otbasisdailyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otbasismonthlyfor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pi_accnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pi_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pi_rem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    procstatus: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    refcom1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    refcom2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    refcom3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reftel1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reftel2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reftel3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rnkcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sccode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sepcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sepnote: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    settaxperiod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxendmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxstartmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxstartyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usrtyp: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    adv13thdte1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adv13thdte2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeefilesub'
  });
};
