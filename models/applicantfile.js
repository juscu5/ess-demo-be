/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantfile', {
    '13thadjamt': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thbasis': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thdivisor': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '13thfactor': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thmonth': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thprevious': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thremarks': {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    acrno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addtaxexemp: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    age: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arecde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    atmprefix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    atmsup: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bankcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    barangay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    birth_prov: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bnkacttypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    branchcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_day_1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_10: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_5: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_6: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_7: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_8: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    b_day_9: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    case_emer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cashbond: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    celnum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    chkminwage: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    citizenship: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    citycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    civilstatus: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    classcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    colcourse: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    colschool: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    colyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    companycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    computationtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    computeph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computesss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computetax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    contractissued: {
      type: DataTypes.STRING(30),
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
    costcenter: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    countrycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ctncode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cuscat: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    dailyhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    dailyph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dailypi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    dailysss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dailytax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dateissued: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    deptcode2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    deptdescription2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dlexpdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dllinc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drugtest: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dte_start_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    elemschool: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    elemyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    emer_add: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    emer_tel: {
      type: DataTypes.STRING(20),
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
    empadd3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empatmacttyp: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    empatmamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    empatmmethod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empatmno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empatmno2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empatmtyp1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empatmtyp2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcomcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empext: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emppass: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empperyos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empper_add1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empper_add2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empper_add3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empper_citycde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empper_provcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empphno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emppic: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    emppic1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emppic2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emppic3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emppino: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emppos: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    empprefix: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    empsssno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empstatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empstatus2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    empsuffix: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    emptin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emptitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emptypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empyos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empzipcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emp_citycde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emp_provcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estbenefits: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    estcontri: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    estexempt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    estfixtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    estpayrollperiods: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    esttaxable: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    esttotalincome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    estyearlytax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    exam_assess_stat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expectedstartsal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    expirydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eyecolor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fathername: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    faxnum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    fbacc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fixph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixpi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fixsss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    foccupation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    friendrel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    friendrelinrel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fsch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    gen_assess_details: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    gen_assess_stat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gracourse: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    graschool: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    grayear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    height: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    highschool: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    highyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    hiredate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    idtypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    inc13th: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    includeatm: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incmass: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inctkm: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    indcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    infapply: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    infapplyinrel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    insurance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    insuranceexpdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    insurancelinc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    intrvw_assess_stat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    isarchivedbyage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isarchivedbyeducreq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_ol_downloaded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    is_onboarding: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    maritalstatus: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    medee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    meder: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    medical: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    moccupation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    monthlyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    monthlyrate2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    monthlytodaily: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    mothername: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    multiprj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    natcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nbi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    newempcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    officeemail: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    oldempcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ol_terms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onboarding_dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    onboarding_enddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    onboarding_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otheraddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pagnum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    paycycle: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    perotheraddress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    perwithwhom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    per_arecde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    per_countrycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    per_region: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pfmem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    phno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pic1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pic2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    piee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pier: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pino: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    placeofbirth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    police: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    posdesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precom13th: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomadd1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precomadd2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precomadd3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precombasic: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomdeminimis: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomfname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precomgross: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomgrossinc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomhazardpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomholpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomlname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precommname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    precomname: {
      type: DataTypes.STRING(30),
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
    precomndpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomnt13th: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomntsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomotpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomsss: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomtaxwit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    precomtin: {
      type: DataTypes.STRING(20),
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
    precomyearterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    precomzipcode: {
      type: DataTypes.STRING(50),
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
    premiumpaid: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    prevapply: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processlvl: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    provarecde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provempadd1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provempadd2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provempadd3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ratestype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rcno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    recstat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refadd1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refadd2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refadd3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refferedby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    refname1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refname2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refname3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refocc1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refocc2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refocc3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    reftelno1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reftelno2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reftelno3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    regdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    relation_1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_10: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_7: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_8: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    relation_9: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    religion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    reloff: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rel_depend_10: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    req_assess_stat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    res_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    res_cert: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    res_dateissue: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    res_issue: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sccode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    scompname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    settofixtax: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    sgl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sglexpdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sgllinc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shiftbatch: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shiftgroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    soccupation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    speciskills: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    spousename: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ssch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sss: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ssscontee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    sssconter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    statuscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    stoploanded: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    termdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    typecode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unionmem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    withtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    withwhom: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    wittaxtodate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    yeswhen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    otp_lock: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "0"
    },
    otp_resendctr: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "3"
    },
    otp_unlockdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    onboarding_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcur_add1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcur_add2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcur_citycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcur_add3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cur_countrycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cur_arecde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcuryos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curotheraddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    curwithwhom: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantfile'
  });
};
