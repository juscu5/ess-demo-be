/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emp_subnavigationmenu', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "ADDED BY LstvPoco ON 17.07.17 14:48"
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    submenid: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    subdesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    module_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    def_add: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 17.07.17 14:48"
    },
    def_edit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 17.07.17 14:49"
    },
    def_delete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 17.07.17 14:49"
    },
    def_print: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    def_export: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_datepicker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pager_tblname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pager_pendingtblname: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emp_subnavigationmenu'
  });
};
