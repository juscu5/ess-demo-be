/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_menus', {
    aclkey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dashico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    def_add: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    def_delete: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    def_edit: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    def_export: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    def_inquiry: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    def_lay: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    def_print: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    fontsize: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    in_dashboard: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    linenum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    mencap: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mencol: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mengrp: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    menheader: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mensub: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    mf_tblname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    modcd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    moddesc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modsubdry: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    popover: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usedscascde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usrtyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_menus'
  });
};
