/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subsidiaryfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrydsc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "System Subsidiary"
    },
    is_main: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    display_desc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    logo_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_pay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'subsidiaryfile'
  });
};
