/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeefiletest', {
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
    addtaxexemp: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adgsisec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adgsislee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adgsisler: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adgsisree: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adgsisrer: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    bloodtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    bnkacttypcde: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.STRING(50),
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
    charcomp1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    charcont1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    charname1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    charpos1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    chkminwage: {
      type: DataTypes.STRING(1),
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
    companycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    computationtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    computegsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computeph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    computepi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    computesss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    computetax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
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
    cstcnt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    curcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cuscat: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    dailygsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    dailyratefor: {
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
    dateofmarriage: {
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
      allowNull: true,
      unique: "employeefiletest_deptcode_unique"
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emer_tel: {
      type: DataTypes.STRING(15),
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empatmacttyp: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    empatmamt: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
      allowNull: true,
      unique: "employeefiletest_empcode_unique"
    },
    empcomcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empext: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empgsisno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "employeefiletest_empno_unique"
    },
    emppass: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empphno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emppic1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    emppic2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    emppic3: {
      type: DataTypes.STRING(150),
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
      type: DataTypes.STRING(10),
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
    empzipcode: {
      type: DataTypes.STRING(50),
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
    fixgsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    f_2316wifedep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    gsisec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsislee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisler: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisree: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisrer: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
      allowNull: true
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
    interest: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    iq: {
      type: DataTypes.STRING(15),
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
    monthlyratefor: {
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
    noofchild: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    oldempcode: {
      type: DataTypes.STRING(50),
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
    pfmem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    placeofbirth: {
      type: DataTypes.STRING(15),
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
    probidate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ratestype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    regulardate: {
      type: DataTypes.DATEONLY,
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
      allowNull: true,
      unique: "employeefiletest_shiftgroup_unique"
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
      allowNull: true
    },
    talents: {
      type: DataTypes.STRING(50),
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
    totgsisec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totgsislee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totgsisler: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totgsisree: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totgsisrer: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    wittaxtodate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'employeefiletest'
  });
};
