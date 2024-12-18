/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_syspar2', {
    abcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    abhrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ablvindtr: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    activatedtrlogfile: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    activatelogfile: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    actytdamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    addfilterinsdat: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    addfilterlt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    addfilternd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    addfilterot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    addfilterreg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    advtypcde1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    advtypcde2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    advtypcde3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    allowbreakhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    allowduplogin: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    allowzerotime: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    appapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apppreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aprapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aprchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aprpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arbaseduedte: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    arpapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arpchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arppreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arrapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arrchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arrpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    asyrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    asyrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    asyreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    autocomhrs: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    autolock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    automemo: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    autonetvat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autoupdprc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    basecur: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    bilapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bilchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bildocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bilpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bilrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bilrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bilreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chkabcount: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkabcounthrs: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkabhrs: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkasy: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkbarcde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkbarcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkbildocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkbilprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconarrdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconarrlinenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconarrprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkcondeldocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkcondellinenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkcondelprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconlate: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkconphcdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconphclinenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconphcprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconretdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconretlinenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconretprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkconut: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkcostcenter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkcs: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkcsdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkcsprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkcstrm: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "Y"
    },
    chkcuscde: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "N"
    },
    chkcusitmcde: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "N"
    },
    chkdayafter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdettyp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkdevnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdr: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkdr2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdr2docnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdr2print: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrdisc1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrdisc2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrdisc3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrdiscinamt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrdte: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkdrlinenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrsdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrsprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkdrtosal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkess: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkgladvtyp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkglbnk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkglcus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkglevat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkglewt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkglitm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkglmemtyp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkglsup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkgltax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkgltrntyp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkinactive: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkitmcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chkitmsta: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkltbracket: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkltbracket_exchol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkltcount: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkltcounthrs: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chklthrs: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkltuthrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chknonvat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkpcfdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkpckdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkpckprint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkprdocnum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkregdays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chksal: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chkso: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chksrt: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chksrtrem: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    chksupcde: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "N"
    },
    chkutbracket: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkutbracket_exchol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chkutcount: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkutcounthrs: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkuthrs: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkwrite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    clkpwd: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    conarrdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condeldocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conlatehrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    conphcdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conretdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conuthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    csapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csautodoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cschkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cscopyso: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    csdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    csdoclocked: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    csdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cslinkar: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    cslinkinv: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    cspreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cstotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    cusgrpapp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cussig1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cussig2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cussig3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    custyp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    datadirclock: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    dayslock1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    dayslock2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    disktype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    displaylocid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    doclocktype: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    dr2apvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dr2autodoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    dr2chkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dr2copyso: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dr2definfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dr2doclocked: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    dr2docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dr2linkar: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dr2linkinv: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dr2preby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dr2repname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dr2repname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dr2reptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dr2totum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drautodoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    drchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drcopyso: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    drdoclocked: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    drdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drlinkar: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drlinkinv: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drsapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drsautodoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    drschkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drscopydr2: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drscopyso: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drsdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    drsdoclocked: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    drsdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drslinkar: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drslinkinv: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drspreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drsrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drsrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drsreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drstotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    drtotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dtrdatadir: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    dtrlock1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtrlock2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtrvalidot: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    editdtr: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    empdatadir: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    emptranfile: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    enabledjc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    enabledphs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    epdatadir: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    essconstring: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    excelheight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    excelwidth: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    expanded: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fstype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    gbsizewarn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    grcprd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    holdeptpaygrp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    hrdb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hrhost: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hrpw: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hruser: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iblvindtr: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ignoremins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    impdaytrandir: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    impgenfile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inccomnamerep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incgrace: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incgrcprdrng: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incleghol: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    inclegnd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    inclegot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    inclunbrk: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incomabs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incotinout: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incpiece: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incregnd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incregndot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incregot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsalrep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incspehol: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incspend: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incspeot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsun: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunleg: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunlegnd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunlegot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunnd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunspe: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunspend: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    incsunspeot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    inctime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    invapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    invchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    invdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    invpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    invrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    invrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    invreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    invtotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    legend: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    legend2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    linkep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    linktobom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    linktodr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    loadevat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lockclockfile: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    ltcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lthrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    manualentry: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    memfld0: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfld1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfld2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfld3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfld4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfld5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfld6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfld7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memfooter: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    memocc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memodte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    memofrom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memoname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memoname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memoname3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memoposition1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memoposition2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memoposition3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memorep: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    merit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    merit2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    multi: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    ndiffend: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ndiffstart: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    neginvbal: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    numbreak: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    offsetlttoot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    onallowpu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passcharnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipbasicday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipbasicrate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipcomdsclmargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipcomlogowidthadj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipdepartment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipempphno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipemppino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipempsssno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipemptin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipleaves: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipleavescode1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payslipleavescode2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paysliploanbal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslippaygroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paysliptaxcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payslipyeartodte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paytrandatadir: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pcfdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pckdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pcklst: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pcklstcopy: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    phctotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    phctypday: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    poapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pochkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    podefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    popreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    porem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    porepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    porepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    poreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pototum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    prapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prjconprc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    prpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prtapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prtchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prtdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    prtpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prtrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prtrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prtreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prttotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    purtax: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    qtyround: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    recpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rectotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    requiredreghrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundlt: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundltmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundotmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundut: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundutmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    salapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salautodoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    salchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salcopydr: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    salcopyso: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    salcusrep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saldefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    saldoclocked: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sallayout2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sallinkar: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    sallinkinv: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    salothinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    salprccde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    salpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salrepname3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salrepname4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    saltotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    searchmode: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    setlunlttout: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    setupnew: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    silinkinv: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    skipempuploadtran: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    soapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soautodoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sochkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sodefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sodoclocked: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    soponum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    sopreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sorepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sorepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sototum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    srtapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    srtautodoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    srtchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    srtdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    srtdoclocked: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    srtpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    srtrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    srtrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    srtreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    srttotum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    standalone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    starttimeallow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    supgrpapp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    supsig1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    supsig2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    supsig3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tkmpassedit: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    trnimportpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    trnuploadpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    userlogmaxrec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usridletime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usrnotloglmt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    utcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uthrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    valot: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    valsoponum: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    vattyp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    viewap: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    viewar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    viewarcheckdep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    viewdtetim: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    visibleempsched: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    xavierhrfld: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    xavierstudfld: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    advtypactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    allowspechar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    appreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    aprreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    apvdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arpreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    arrreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    bilreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    bnkactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cgslower: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cgsupper: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chkapv: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkapvauto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkapvdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkapvprint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkavplock: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkbil: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkbill: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkcon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkcsadocnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkcsalinenum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkcsaprint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkds: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkdsdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkdsprint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkhelp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chklayoutpwd: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chkpdw: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkpdwdocnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkpdwprint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkpettycash: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkpr: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    chkprcmarkup: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    condelapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condelchkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condelpreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condelrepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condelrepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condelreptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csaapvby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csachkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csadocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csapreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csarepname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csarepname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csareptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csdefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    csdocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cslockprc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    csprtcusitm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cusactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cusdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ddautocomplete: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ddautotype: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ddlike: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    defcuscde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    disableca: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disableinvlink: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dnractcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dr2defdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dr2prtcusitm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drdefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drdocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drhideprc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drlockprc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drprtcusitm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drsdefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drsprtcusitm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dsdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dsmaxchk: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    invdefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invdocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invmaxitem: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    invprcdec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invprcformat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    invreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    invwarheader: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itmcgsact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itmdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itminvact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itmprtact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itmpuract: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itmpurdisact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itmsalact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itmsaldisact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itmsrtact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    manualglpost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memtypactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    multipay: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    optaraging: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    pdwdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    podefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    podocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    prcinvin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prcinvout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prtdefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prtdocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prtreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    purmaxitem: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    purprcdec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    purprcformat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    purwarheader: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recdefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recdocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    repcusitmcde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repcusitmdsc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repnote: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    reqactcde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    saldefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    saldocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sallockprc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salmaxitem: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    salprcdec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salprcformat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    salprtcusitm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    salwarheader: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seriespagerec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soachkby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soadetmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    soapreby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    socrelim: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    socrelimamt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sodefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sodocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    solockprc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soprtcusitm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    spechar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    srtdefdetinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    srtdocfixlen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    srtlockprc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    srtprtcusitm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    srtreqby: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    supactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    supdefinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sysmain: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sysmsg: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    trntypactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    vattypdoc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allow_ess_apprv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    appmaxlevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    authono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkautootded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkbreakpaid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkearlyutpol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chkearlyutpolmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chk_breakpaid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customkeyword: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dedltot: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dedltot_applltpol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dedltot_minot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    displayshiftgrid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dtelock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empdtrnewtab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empschedwholtyp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gpsallowdist: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    incalu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incroundearlyot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    latecount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    latepolicy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    otapplyon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    removeabotut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repdtrcomlogo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repdtrcomlogodir: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    repdtrcomlogoleftadj: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repdtrcomlogolen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repdtrcomlogowid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repdtrfooter11: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter12: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter13: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter21: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter22: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter23: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter31: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter32: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrfooter33: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    repdtrheaderleftadj: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    roundoff_ot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    roundoff_ot_opt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    roundotupdown: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    roundotupdown_interval: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    roundotupdown_minot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    setprjfrom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    show24hrs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    showoverbreak: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    splitdtr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tkmautho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uselatepolicy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    use_mobiletimelog: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    f2307amtdec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    f2307autoshow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    f2307expirydate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    f2307issuancedate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    f2307printformat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    f2307sigdir: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    f2307signam: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    f2307sigpos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    f2307sigtin: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    f2307taxagentnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipcomlogolmargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paysliplabel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    upallowcode: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    upallowinchol: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    upearcode: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    upearholrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    upearreghrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    upearregrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    upearrstrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    layout_type_2316: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "new"
    }
  }, {
    sequelize,
    tableName: 'tmplt_syspar2'
  });
};
