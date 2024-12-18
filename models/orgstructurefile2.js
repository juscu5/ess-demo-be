/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgstructurefile2', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empfullname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    head: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    headlnum: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    linenum: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    orgcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    orgdesc: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    struccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orgstructurefile2'
  });
};
