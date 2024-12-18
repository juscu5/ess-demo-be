/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operationnavigationuser_menus', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empnav_menid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    has_edit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    has_inquiry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'operationnavigationuser_menus'
  });
};
