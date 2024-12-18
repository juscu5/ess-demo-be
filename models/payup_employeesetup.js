/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payup_employeesetup', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    no_hol_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    no_nd_ot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    no_nd_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    no_ot_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    no_pay_lt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    no_pay_ut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    no_rd_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'payup_employeesetup'
  });
};
