/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_taxtable', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "MODIFIED BY LstvPoco ON 16.09.22 17:48"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    taxcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    baseamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:05"
    },
    basetax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:05"
    },
    percentamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:05"
    }
  }, {
    sequelize,
    tableName: 'tmplt_taxtable'
  });
};
