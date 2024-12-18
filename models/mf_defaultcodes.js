/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mf_defaultcodes', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    table_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    column_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    column_desc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    emp_fields: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mf_defaultcodes'
  });
};
