/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('companyfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comdsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dbname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailadd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailpwd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailhost: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailport: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    use_tls: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    use_hostname: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cercor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    commobnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    companyadd1: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    companyadd2: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    companycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    companydescription: {
      type: DataTypes.STRING(75),
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
    companysssno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    companytin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    companyzipcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compbenefts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    compdrsscde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comphilno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    compindustry: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compino: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    compoverview: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    compoverview_stat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    compproctime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compsize: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compsnap_stat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    compspknlang: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compwebsite: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compworknghrs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contactper: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    employercode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    employername: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    locator: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    memref: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    memrefoth: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    notedby: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    offdes: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    pagibigtype: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    paradd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parcompany: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    parconperson: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    parconpos: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    parmobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    partelnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phildiskempadd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildiskempid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phildiskempnam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildisksignam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phildisksigpos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phildisktin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    philempsssno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    philempsssno1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    philemptype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    philemptypereg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    philtyperep: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    preby: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    prebypos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    regnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ssscomcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sssr1areptyp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    telno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    town: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    typeemp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrhost: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "smtp.gmail.com"
    },
    usrpwd: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emailbody: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'companyfile'
  });
};
