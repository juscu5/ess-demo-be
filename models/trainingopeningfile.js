/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingopeningfile', {
    approve: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATEONLY,
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
    joinreq: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    todocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngdteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngtmefrm: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngtmeto: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingopeningfile'
  });
};
