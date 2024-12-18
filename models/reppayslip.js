/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reppayslip', {
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    grossincome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    netpay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd011: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd012: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd013: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd01amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd021: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd022: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd023: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd02amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd031: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd032: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd033: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd03amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd041: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd042: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd043: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd04amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd051: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd052: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd053: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd05amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd061: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd062: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd063: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd06amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd071: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd072: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd073: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd07amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd081: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd082: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd083: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd08amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd091: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd092: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd093: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd09amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd101: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd102: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd103: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd10amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd111: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd112: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd113: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd11amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd121: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd122: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd123: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd12amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd131: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd132: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd133: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd13amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd141: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipd142: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipd143: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipd14amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe011: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe012: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe013: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe01amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe021: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe022: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe023: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe02amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe031: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe032: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe033: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe03amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe041: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe042: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe043: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe04amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe051: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe052: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe053: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe05amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe061: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe062: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe063: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe06amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe071: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe072: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe073: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe07amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe081: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe082: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe083: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe08amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe091: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe092: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe093: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe09amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe101: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe102: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe103: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe10amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe111: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe112: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe113: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe11amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe121: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe122: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe123: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe12amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe131: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe132: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe133: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payslipe13amt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe141: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payslipe142: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    payslipe143: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    totded: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'reppayslip'
  });
};
