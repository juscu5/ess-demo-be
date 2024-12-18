/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payot', {
    companycode: {
      type: DataTypes.STRING(3),
      allowNull: true
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
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
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
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ratesamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ratescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratesdescription: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    rateshh: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    rateshhmm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rateshrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    rateskey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ratesmm: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ratesrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ratestype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tmpamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmphrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    w2num: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payot'
  });
};
