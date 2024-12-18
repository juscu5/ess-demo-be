/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeextension', {
    acr_carddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acr_carduntil: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acr_citizenof: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    acr_dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acr_visa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    acr_visaadd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    acr_visadate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    acr_visastat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    acr_visatype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    acr_visavdate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bloodtype: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bloodtypecde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bonddatefrom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bonddateto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bondnote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bondreason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    charcont2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    charcont3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    charcont4: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    charcont5: {
      type: DataTypes.STRING(30),
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
    colgrayear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    compskill: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dateofmarriage: {
      type: DataTypes.DATE,
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
    empcatdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empclassdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empper_citycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empper_provcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empstats: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    emp_citycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emp_provcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expdte: {
      type: DataTypes.DATEONLY,
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
      type: DataTypes.DATE,
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
    gradstudies: {
      type: DataTypes.STRING(50),
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
    jobdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    limitamount: {
      type: DataTypes.STRING(400),
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
    mariagedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mbirthdate: {
      type: DataTypes.DATE,
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
    medlinkno: {
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
    noofdept: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    officeemail: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    passdateissued: {
      type: DataTypes.DATE,
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
      type: DataTypes.DATE,
      allowNull: true
    },
    peraaid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    placeofbirth: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    placeofbirth2: {
      type: DataTypes.STRING(100),
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
    salary: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    salgradecde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    saltype: {
      type: DataTypes.STRING(30),
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
      type: DataTypes.STRING(20),
      allowNull: true
    },
    stin: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "0"
    },
    strucposcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subuntcde: {
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
    tshirtsize: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    unitsearned: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    utilamount: {
      type: DataTypes.DECIMAL,
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
    },
    xsalumnus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    postgrad_crsmjr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    postgrad_dteend: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    postgrad_dtestart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    postgrad_school: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    year_grad1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    year_grad2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    year_grad3: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    year_grad4: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    year_grad5: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    charemail1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charemail2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charemail3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charemail4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charemail5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chartelno1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chartelno2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chartelno3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chartelno4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chartelno5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charmobile1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charmobile2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charmobile3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charmobile4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charmobile5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charrel1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charrel2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charrel3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charrel4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charrel5: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeextension'
  });
};
