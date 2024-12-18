/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emp_subnavigation_fieldmenu', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    menid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    submenid: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fieldcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fielddsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fieldtyp: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    fieldtable: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tablename: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tablefield: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    hr_setup: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_viewonly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'emp_subnavigation_fieldmenu'
  });
};
