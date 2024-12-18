/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_subnavigationmenu', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "ADDED BY LstvPoco ON 17.07.17 14:33"
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
      comment: "ADDED BY LstvPoco ON 17.07.17 14:33"
    },
    def_edit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 17.07.17 14:33"
    },
    def_delete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 17.07.17 14:33"
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
    entry_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    ol_app_is_active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    in_ol_app_menu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_datepicker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'app_subnavigationmenu'
  });
};
