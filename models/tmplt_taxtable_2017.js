/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_taxtable_2017', {
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
      defaultValue: 0.00
    },
    basetax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    percentamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "MODIFIED BY LstvPoco ON 18.03.20 11:39"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmplt_taxtable_2017'
  });
};
