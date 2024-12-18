/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ope_subnavigationusermenu', {
    has_add: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    has_delete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    has_edit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    menid: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    submenid: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    has_del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    has_inquiry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ope_subnavigationusermenu'
  });
};
