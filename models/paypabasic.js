/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paypabasic', {
    abamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abhhmm: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    abhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    abhrsorg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    basic: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuscde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    headallow: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ltamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    lthhmm: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    lthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    lthrsorg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ltmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    paphamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    papiamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    passsamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pataxamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrollrun: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prjdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    regdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    regdaysorg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    reghhmm: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    reghrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    reghrsorg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    regmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    regothrsorg: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text13: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text14: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text15: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text16: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text17: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text18: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text19: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text20: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text21: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text22: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text23: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text24: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text25: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text26: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text27: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text28: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text29: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text30: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text31: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text32: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text33: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text34: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text35: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text36: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text37: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text38: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text39: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text40: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text41: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text42: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text43: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text44: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text45: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text46: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text47: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text48: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text49: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text50: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text51: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text52: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text53: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text54: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text55: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text56: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text57: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text58: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text59: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text60: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    utamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    uthhmm: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    uthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    uthrsorg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    utmins: {
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
    tableName: 'paypabasic'
  });
};
