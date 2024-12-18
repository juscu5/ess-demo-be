/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payslip_period', {
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
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
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_hold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'payslip_period'
  });
};
