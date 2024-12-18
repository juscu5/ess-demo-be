/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repcustomfile2', {
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    colname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    colnum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    },
    repcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    repdsc: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repcustomfile2'
  });
};
