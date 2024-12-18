/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empschedfile', {
    AMPM: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    appcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
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
    isemp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    miltime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    schedcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scheddesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scheddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    schedtime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    strthrs: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    strtmin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empschedfile'
  });
};
