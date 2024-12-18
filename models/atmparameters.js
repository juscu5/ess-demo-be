/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atmparameters', {
    alliedaccnum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    alliedbankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    alliedbrncde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    allieddatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    allieddateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    allieddepdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alliedeffdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alliedmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    alliedserbranch: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    alliedyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    approvedby: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    atmpar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bocaccountname: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    bocaccountno: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    bocaccounttype: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bocbankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bocbatchno: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    boccomcde: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    boccomdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    boccorporatecode: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    bocdatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bocdateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bocmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bocpaydte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bocposdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    boctrncdecredit: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    boctrncdedebit: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bocyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bpiaccnum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    bpibankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bpibatchno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bpibrncde: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    bpicomcde: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    bpidatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bpidateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bpieffdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bpimonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bpipayid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bpiserbranch: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bpiyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chinaaccnum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    chinabankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    chinabrncde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    chinadatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    chinadateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    chinadepdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    chinaeffdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    chinagroup: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chinamonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    chinamonthabb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chinarem1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chinarem2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chinaserbranch: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    chinayear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    companycode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    companydescription: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    companyinitials: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    equipciaccnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    equipciacctyp: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    equipcibankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipcibrncde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    equipcibrndsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipcicomcde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    equipcicomdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    equipcidatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    equipcidateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    equipcieffdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    equipcimonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    equipcipayacc: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    equipciserbranch: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    equipciyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gloaccnum: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    globankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    globrnadd: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    globrncde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    globrnname: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    glocomcde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    glocomdsc: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    glodatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    glodateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gloeffdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gloencrypted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    glofilename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    glomonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    glosignatory1: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    glosignatory2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    glowithaccname: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gloyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ibankaccnum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ibankbankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ibankbatchno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ibankbrncde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ibankcomcde: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ibankdatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ibankdateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ibankdc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ibankeffdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ibankmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ibankserbranch: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ibankyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inpath: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    keppelaccountno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    keppelattention: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    keppelbankbranch: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    keppelbankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    keppelbankdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keppelcomadd1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    keppelcomadd2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    keppelcomcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    keppeldatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    keppeldateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    keppelmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    keppelposition: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    keppelyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    landaccname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    landaccountno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    landattention: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    landbankbranch: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    landbankbranch1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    landbankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    landbankdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    landbatchno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    landbranchcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    landcomadd1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    landcomadd2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    landcomcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    landdatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    landdateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    landmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    landposition: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    landyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mbtcaccnum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    mbtcbankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mbtcbrncde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    mbtcdatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mbtcdateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mbtceffdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mbtcmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mbtcserbranch: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    mbtcyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    outpath: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    preparedby: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sbaprefix: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    uobbankcode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    uobcomcde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    uobcomdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uobdatefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uobdateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uobdbfdatadir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uobmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    uobyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'atmparameters'
  });
};
