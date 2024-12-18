/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantfilesub', {
    abaddbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    abaddbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    abbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    abbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dailyhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
      allowNull: true
    },
    jobcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leaveaddbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leaveaddbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leavebasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leavebasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    multiatm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multiatmtyp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    otaddbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    otaddbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    otbasisdaily: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    otbasismonthly: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pi_accnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pi_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxstartmonth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    taxstartyear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usrtyp: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantfilesub'
  });
};
