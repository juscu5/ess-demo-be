/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payregpar', {
    coltype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fieldvalue: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fldgroup: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fldname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fldval2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sortorder: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tablename: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payregpar'
  });
};
