/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usermenufile_cs', {
    access_add: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_display: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_edit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_exe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_inq: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_lay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_list: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    access_prt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    grpcde: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    grp_sidebar: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    inc_sidebar: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    menacc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mencap: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mengrp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menidx: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    menkey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mennum: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    menprg: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mensub: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menvis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usermenufile_cs'
  });
};
