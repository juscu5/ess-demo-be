/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onboardingincharge', {
    categcde: {
      type: DataTypes.STRING(50),
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
    table_cde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    table_desc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    table_val: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    taskcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'onboardingincharge'
  });
};
