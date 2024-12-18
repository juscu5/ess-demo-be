/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_employmentsalaryhistory', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    encodeddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    esh_typename_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    esh_typename_val: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manualentry: {
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
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_employmentsalaryhistory'
  });
};
