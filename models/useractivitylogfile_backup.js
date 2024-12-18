/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('useractivitylogfile_backup', {
    activity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    parameter: {
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
      type: DataTypes.STRING(150),
      allowNull: true
    },
    sysmodule: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usrnam: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    usrtim: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    webpage: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'useractivitylogfile_backup'
  });
};
