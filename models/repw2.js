/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repw2', {
    adwithtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    birthdatestr: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    b_day_1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_10: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_4: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_5: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_day_7: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_8: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_day_9: {
      type: DataTypes.DATE,
      allowNull: true
    },
    civilstatus: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    companyadd1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    companyadd2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    companydescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    companyfname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    companylname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    companymname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    companytin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    companyzipcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    computetax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dailytax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    depend_1: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_10: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_2: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_3: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_4: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_5: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_6: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_7: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_8: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    depend_9: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    empadd1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empadd2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emptin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empzipcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fixtax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    from: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    headingkey: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hiredate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mfrom: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mto: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    precom13th: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    precomadd1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precomadd2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precomadd3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precomfname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precomlname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precommname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precomname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precomname2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precomname3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precomnt13th: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    precomntsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    precomsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    precomtin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precomtin2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    precomtin3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    precomzipcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precomzipcode2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    precomzipcode3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rel_depend_10: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    res_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    res_cert: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    res_dateissue: {
      type: DataTypes.DATE,
      allowNull: true
    },
    res_issue: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxtype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    termdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    to: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    w2num14: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num15: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num16: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num17: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num18: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num19: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num20: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num21: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num22: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num23: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num24: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num25: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num26: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num27: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num27a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num27b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num28: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num29: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num30: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num30a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num30b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num31: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num32: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num33: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num33a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num33b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num34: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num34a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num34b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num35: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num36: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num37: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num38: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num39: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num40: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num40a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num40b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num41: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num42: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num42a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num42b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num43: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num44: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num45: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num46: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num47: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num47a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num47b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num48: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num49: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num49a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num49b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num50: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num51: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num52: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num53: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num54a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num54b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2num55: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    w2oth1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    withtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'repw2'
  });
};
