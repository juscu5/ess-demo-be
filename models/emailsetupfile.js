/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emailsetupfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrpwd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usrhost: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usrport: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    is_default: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    dbtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sendrname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sendremail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emailsetupfile'
  });
};
