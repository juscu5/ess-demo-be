/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userfile_cs', {
    allow_backup: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    allow_restore: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    grpcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    hidepayamt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    menkey: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sesid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrlvl: {
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
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    login_attempt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    resetpwd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrstat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'userfile_cs'
  });
};
