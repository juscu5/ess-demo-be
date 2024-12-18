/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menus_pay', {
    aclkey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    def_add: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_delete: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_edit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_export: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_inquiry: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_lay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_print: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    linenum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mencap: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mencol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mengrp: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    menheader: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    menico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    menidx: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    menlvl: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mennum: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    menprg: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    menrow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mensub: {
      type: DataTypes.STRING(150),
      allowNull: true
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
    sal_info_toggle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sal_inquiry_toggle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tmp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    usrtyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'menus_pay'
  });
};
