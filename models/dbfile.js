/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dbfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comdsc: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    dbname: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    comtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    noofuser: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    noofemployee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comcontact: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    commobnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comemail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compwd: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comtel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comadd1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comadd2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    regdatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    package: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    superuser: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_activation: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dbfile'
  });
};
