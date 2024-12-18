/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payatmfile1', {
    accnum_total: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    atmcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    atmgroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bankcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hash_total: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    netpay_highest: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    netpay_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payatmfile1'
  });
};
