/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_systemparameters', {
    '1601camended': {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    '1601canytax': {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    '1601cbnkcde': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601cchkamt': {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    '1601cchkdte': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '1601cchknum': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601ccshbnkdeb': {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    '1601cinctax': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '1601cnosheet': {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    '1601cocc': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601crdocode': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601cregadd': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601ctaxacc': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601ctaxpayer': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601ctaxpaypos': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601ctaxpaytin': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601ctelno': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601ctin': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601ctreasurer': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601ctrepos': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601ctretin': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '1601cwname': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601czipcode': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601eocc': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601erdocode': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601eregadd': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601etelno': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601etin': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1601ewname': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1601ezipcode': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1604cffirstcreditmon': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '1604cfrefund': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '1604cfrefunddte': {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    '1604cftotamtoverremit': {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    acceptagree: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autorefreshaux: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    backupfilename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    counter: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    datadirectory: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    datafilename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    datapwd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dirfilename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    editdate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    filetype: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    formload: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    limitcount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    limitdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    monrefreshaux: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phibottommargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phildiskempadd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildiskempid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildiskempnam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildisksignam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildisksigpos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildisktin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phileftmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phirightmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phitopmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ph_er2_salmonthlyrate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pibottommargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pileftmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pirightmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pitopmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shellsta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sssbottommargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ssscomcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sssdiskempadd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sssdiskempid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sssdiskempnam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sssdisksignam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sssdisksigpos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sssdisktin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sssleftmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    sssrightmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ssstopmargin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sysdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usrpwd: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    '1601ctaxaccdteexp': {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    '1601ctaxaccdteissue': {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmplt_systemparameters'
  });
};
