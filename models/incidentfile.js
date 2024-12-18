/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incidentfile', {
    ampm: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    casenum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dysaway: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dysrestrict: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empnme: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    incdsc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    incdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    inctime: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    injcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    innote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'incidentfile'
  });
};
