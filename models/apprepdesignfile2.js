/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apprepdesignfile2', {
    columnalign: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    columncode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    columnsavedid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    columnwidth: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    column_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    field_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    field_table: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    field_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    isrepvisib: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    submenid: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'apprepdesignfile2'
  });
};
