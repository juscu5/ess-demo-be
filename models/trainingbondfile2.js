/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingbondfile2', {
    bond_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dte_effective: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dte_effectivefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dte_effectiveto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    monthly_bond_amount: {
      type: DataTypes.DECIMAL,
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
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingbondfile2'
  });
};
