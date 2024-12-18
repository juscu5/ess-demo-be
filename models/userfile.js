/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sesid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    allow_backup: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    allow_restore: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    usrsessid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usrsesstim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    usrpwd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrlvl: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    grpcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    menkey: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowusr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allwcid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allwmovefuncdte: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allwprntbilling: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allwprntcosting: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allwusrcancel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enablenotification: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mp_budgetlock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mp_finallock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mp_planninglock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    plancde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    smncde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    viewap: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    viewar: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    viewarcheckdep: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hidepayamt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    login_attempt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    maxlogattempt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    menid: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    resetpwd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sig: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sigdir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usrapprver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usrstat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emailbody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    emailcc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usripaddress: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userfile'
  });
};
