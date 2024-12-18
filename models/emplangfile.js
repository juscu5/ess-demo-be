/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emplangfile', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    langcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    langcomp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    langdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    langfluency: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    langread: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    langspeak: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    langwrite: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emplangfile'
  });
};
