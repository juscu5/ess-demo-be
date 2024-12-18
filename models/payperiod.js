/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payperiod', {
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computegsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computeph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computesss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computetax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computeud: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    compute_oldversion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    curcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    currte: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    cycleno: {
      type: DataTypes.STRING(15),
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
    dayswork: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paycycle: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrollrun: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    paystatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "payperiod_periodkey_subdrycde"
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reqcnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    taxtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "payperiod_periodkey_subdrycde"
    },
    is_esspayslip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'payperiod'
  });
};
