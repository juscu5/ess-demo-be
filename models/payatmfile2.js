/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payatmfile2', {
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
    batchnum: {
      type: DataTypes.STRING(10),
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
    empatmacttyp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empatmno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empatmno2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hashcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hashcode2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    manualentry: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    netpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    netpaystr: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    netpay_2nd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    netpay_pri: {
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
    tableName: 'payatmfile2'
  });
};
