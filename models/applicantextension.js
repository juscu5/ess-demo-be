/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantextension', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appcontactrel1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appcontactrel2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appcontactrel3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bloodtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bloodtypecde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    case_emer2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    case_emer3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    char1_checkedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    char1_remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    char2_checkedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    char2_remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    char3_checkedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    char3_remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    charcomp1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charcomp2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charcomp3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charcomp4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charcomp5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charcont1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charcont2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charcont3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charcont4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charcont5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charname3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charname4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charname5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charpos1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charpos2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charpos3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charpos4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charpos5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charrel1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charrel2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charrel3: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charrel4: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charrel5: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charemail1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charemail2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charemail3: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charemail4: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charemail5: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    charmobile1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charmobile2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charmobile3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charmobile4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    charmobile5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chartelno1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chartelno2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chartelno3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chartelno4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chartelno5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    colgrayear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dateofmarriage: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dialect: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    drivers_license: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    emer_add2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emer_add3: {
      type: DataTypes.STRING(100),
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
    empstats: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    expectedsalary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    eyecolor: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fbusinessadd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fcitizenship: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    femail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    femployer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fhomeadd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    first_prior: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    first_prior_type: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fmobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    freligion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fremark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fsch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fstud1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fstud2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fstud3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fstud4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fstud5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ftelno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fwtelno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    grpcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    grpdesc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    haircolor: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    hobbies: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    interest: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    iq: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    mage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    magrayear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mbusinessadd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mcitizenship: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    memail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memployer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mhomeadd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mmobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    mreligion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mremark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    msch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mtelno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mwtelno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    noofchild: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    passdateissued: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    passno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passplaceissued: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passvalidity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    placeofbirth: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    post_crsmjr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    post_dteend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    post_dtestart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    post_honaward: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    post_school: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    prim_dteend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prim_dtestart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prim_honaward: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prim_school: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    saddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sbusinessadd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scitizenship: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    second_prior: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    second_prior_type: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sec_dteend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_dtestart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_honaward: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sec_school: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    semail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    semployer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    skills: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    smobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sreligion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sremark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ssch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stelno: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    stin: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    swtelno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    talent: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    talents: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    ter_crsmjr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ter_dteend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ter_dtestart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ter_honaward: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ter_school: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    third_prior: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    third_prior_type: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valucareidno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    valucarememtype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    valucareprogtype: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantextension'
  });
};
