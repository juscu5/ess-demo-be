/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paytran', {
    '13thbasis': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thdivisor': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thmonth': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    '13thremarks': {
      type: DataTypes.STRING(60),
      allowNull: true
    },
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
    abhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ad13thmonth: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    addtaxben: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adec: {
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
    adjgsisec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adjgsislee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adjgsisrer: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    admedee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    admeder: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adpiee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adpier: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adssscontee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adsssconter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    adwithtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    allowamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    baseamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    basetax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    basic: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    basicrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    bentaxamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    benwittax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    chkminwage: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    companycode: {
      type: DataTypes.STRING(3),
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
    computepf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    computeud: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    comstat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contriamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    curcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    currte: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dedamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    delemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    earamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empannual: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "paytran_empcode_periodkey_unique"
    },
    empcomputetax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    emponhold: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    empstatus: {
      type: DataTypes.STRING(10),
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
    forrecompute: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    grossdeductions: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    grosspay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    gsisamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    leaveamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    loanamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ltamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    lthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ltmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    lttothrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    minexemptamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    monthlyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    monthlyratefor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    multidel: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    multiprj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    netpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    netpayrnd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    obv: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    otamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrollrun: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    paystatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pcssta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    percentamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "paytran_empcode_periodkey_unique"
    },
    phamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    piamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pieceamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    procstatus: {
      type: DataTypes.STRING(25),
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
    recompute: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    regdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    reghrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    regincamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    regmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    sssamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    ssssalarycredit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00
    },
    supincamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxable_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    taxamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    taxcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tkmotsta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tkmsta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tot13thmonth: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totallotamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    totmedee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totmeder: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totpiee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totpier: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totssscontee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totsssconter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totwithtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    utamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    uthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    utmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    uttothrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    withtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    peraamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    perayear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '14thbasis': {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    '14thmonth_orig': {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    '14thmonth': {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    '14thcode': {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paytran'
  });
};
