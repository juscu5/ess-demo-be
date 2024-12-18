/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repcustomfile01', {
    colname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fieldcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'repcustomfile01'
  });
};
