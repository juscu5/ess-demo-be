/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingrequestfile', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    appfullname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATE,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "PENDING"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngdsc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingrequestfile'
  });
};
