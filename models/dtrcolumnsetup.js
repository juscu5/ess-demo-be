/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtrcolumnsetup', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    field: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    col_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    inc_dtr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'dtrcolumnsetup'
  });
};
