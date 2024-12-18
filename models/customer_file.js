/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_file', {
    conper: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cusadd1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cuscde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
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
    telno: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_file'
  });
};
