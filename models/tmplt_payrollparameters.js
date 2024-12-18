/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_payrollparameters', {
    '13comab': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13combasic': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comcremon1': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comcremon2': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comcreyer1': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comcreyer2': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comdedpre': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comdetdir': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comdivisor': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comlt': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comut': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13monproj': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '2316prepaidcde': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    abbasis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    activatelogfile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    alertempexp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow1ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow1basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow1basicfix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow1basicfixdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allow1code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allow1lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow1reg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow1ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow2ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow2basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow2basicfix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow2basicfixdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allow2code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allow2lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow2reg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow2ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow3ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow3basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow3basicfix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow3basicfixdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allow3code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allow3lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow3reg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow3ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow4ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow4basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow4basicfix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow4basicfixdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allow4code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allow4lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow4reg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow4ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow5ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow5basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow5basicfix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow5basicfixdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allow5code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allow5lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow5reg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow5ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowatmentry: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowdailycont: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    alloweduser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowmultirate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowmultirate2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allowmultirate3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allowmultirate4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allowmultirate5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allowpiecerate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowqtydec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allowratedec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allowunpost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    apppicdir: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    apremailnotif: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aproption: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    atmbasisper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    atmprefix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    auto13: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    auto13thadj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoallow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autobackup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autobasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoempsta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoempstacde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    autoloan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autopiece: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    benefitsexempt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    captiondt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    captionlt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    captionph: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    captionpi: {
      type: DataTypes.STRING(50),
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
    cashbondtype: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    chkdeftaxcde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkgsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkincgp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chklinktracc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkminwage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkpifix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chktaxlimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    clockdatadir: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cnstringbil: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cnstringtkm: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cnstringtracc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    companylogodir: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    compcustompayallow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    compcustompayear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computebentax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    cuspsadjleft: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cuspsadjtop1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cuspsadjtop2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cuspsadjtop3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    customfldcde1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde10: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde11: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde12: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde13: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde14: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde15: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde16: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde17: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde18: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde19: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde20: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde7: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde8: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customfldcde9: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customkeyword: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dailyhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ded1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded1code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ded2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded2code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ded3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded3code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ded3code3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ded3code4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ded3code5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ded4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded4code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ded5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded5code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ded6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ded9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dedcashbond: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dedcdesav: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dedcode1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dedpf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dedregformat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dedud: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    defbankcode: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "EMPLOYEE"
    },
    deftaxcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    denoroundtyp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    doslpt: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    downloadoption: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ear1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ear9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ecola: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ecolaab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ecolabasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ecolacode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ecolalt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ecolareg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ecolaut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empexpday: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    emppicdir: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    excelheight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    excelwidth: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    exctaxcomno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    expab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    expbasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    explt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    exput: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    formatno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    glotconso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    graceper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    grope3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grope4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grope5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    groper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    groper2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    groper3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    groper4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    groper5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsiscomab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gsiscombasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gsiscomlt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gsiscomut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gsiseclimit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisecper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisleeper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsislerper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisreteeper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisreterper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    headallow: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hrdb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hrhost: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hrpw: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hruser: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    inc1601c_16cph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inc1601c_16cpi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inc1601c_16csss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incallemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incallowotrates1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incallowotrates2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incallowotrates3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incallowotrates4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incallowotrates5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded113th: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1ph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1pi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1sss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded2ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded2basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded2lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded2ph: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded2pi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded2sss: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded2ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded3ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded3basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded3lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded3ph: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded3pi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded3sss: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded3ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded4ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded4basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded4lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded4ph: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded4pi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded4sss: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded4ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded5ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded5basic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded5lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded5ph: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded5pi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded5sss: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incded5ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incdedud: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incgroper: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incleaveemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inctermemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropayab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropaybasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropaylt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropayph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropaypi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropaysss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropayut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    indconver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inddailyhrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ind_dailyhrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leavebasis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leavemode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    leavemodedd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leavemodehh: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leavemodemm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    linkca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    linkgl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    link_bil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ltcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    manualviewcom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    maxgsisamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    maxothrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    maxpiamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    maxpiamounter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    maxpipercent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    maxpipercenter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    mingsisamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    minpiamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    minpiamounter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    minpipercent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    minpipercenter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    minwagebasis: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    monthlytodaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    multiatm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    multicur: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    multiprj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nontaxleaves: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    notexceedgsisper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    optlinkgl: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    otbasis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otcode1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otcode2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otcode3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otcode4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otcode5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otmode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    payalphalmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payalpharmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    paydeno005: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno010: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno025: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno050: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno100: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno1000: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno20: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno200: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno50: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paydeno500: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payeditcurrte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payregcustyp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    payregdedcde1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregdedcde2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregdedcde3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregdedcde4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregdedcde5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregdedcde6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregdedcde7: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregdedtyp1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregdedtyp2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregdedtyp3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregdedtyp4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregdedtyp5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregdedtyp6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregdedtyp7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregearcde1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregearcde2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregearcde3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregearcde4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregearcde5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregearcde6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregearcde7: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payregeartyp1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregeartyp2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregeartyp3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregeartyp4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregeartyp5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregeartyp6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payregeartyp7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    payreglmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payregreport: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payregrmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payreg_allowcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payreg_leavescode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipcustyp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    payslipreport: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipsterling: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    pfcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pfcdename: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pfcdename2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pfcdename3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pfcdename4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pfcdename5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pfper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phcom13th: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    phcomab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    phcombasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    phcomlt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    phcomtyp: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    phcomut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    phmaxamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phmaxbaseamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phmaxcontee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phmaxconter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phminamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phminbaseamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phmincontee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phminconter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phpercontee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phperconter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    picmode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    picom13th: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    picomab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    picombasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    picomlt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    picomut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    piecefile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    piecelink: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pifixamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pisrate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pi_maxtaxded: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pregapvby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pregapvbycap: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pregapvbypos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pregpreby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pregprebycap: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pregprebypos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pregverby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pregverbycap: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pregverbypos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    procstatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    projectfile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    projectlink: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    psdetailfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psdetailfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psdetailfsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    psheaderfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheaderfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheaderfsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    psliprem: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pslipsigncap: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    psnetpayfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psnetpayfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psnetpayfsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rdocode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    replongpapersize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    repnewwindow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    repvb6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    signatory: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ssscom13th: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ssscomab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ssscombasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ssscomlt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ssscomut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sysnewsetup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sysversion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    t13basis: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    t13coverage: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    t13new: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    taxcomab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxcombasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxcomleave: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxcomlt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxcomph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxcompi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxcomsss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxcomtyp: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "2ND"
    },
    taxcomut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxlimit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tax_est_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    timekdownload: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    timekfile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tkcomp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tkmautoleaves: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tkmsql: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tkmtyp: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "STANDARD"
    },
    traccfile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    udcomtype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unionduescde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unionduesper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    updedcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    upinvalid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_exc_ab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_exc_convreghrstodays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_exc_lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_exc_regdaysofab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_exc_reghrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_exc_ut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_inc_convabhrstoabdays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    useoldversioncomp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    userlogmaxrec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    userpaygroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usridletime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    vatper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    vendorcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2oth1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    w2oth2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    w2oth23: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    w2oth3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    w2oth30: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    w2oth4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    wtaxper: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ytop_2316: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13comlatestbas': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoempcde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoprjcde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cnstringhris: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cnstringpayout: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    disfooter_13thm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    disfooter_ar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    disfooter_atm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    disfooter_dedr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    disfooter_dr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    disfooter_FR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empcodelock: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    glotconso2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lastempcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    lastprjcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    link_hris: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    link_payout: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    multiprjecola: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payoutallowupadj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pregnoteby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pregnotebycap: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pregnotebypos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prjcdelock: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    prjdefrates: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    psdetail2font: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psdetail2fontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psdetail2fsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    psfooterfont: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psfooterfontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psfooterfsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    psheader1font: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader1fontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader1fsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    psheader2font: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader2fontstyle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psheader2fsize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retrocomab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retrocombasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retrocomcremon1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retrocomcremon2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retrocomcreyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retrocomlt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retrocomut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    retropay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    trainlaw: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_exc_leave: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uptkm_offsetlate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmplt_payrollparameters'
  });
};
