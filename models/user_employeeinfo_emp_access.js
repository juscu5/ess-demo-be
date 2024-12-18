/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_employeeinfo_emp_access', {
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    empcode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_employeeinfo_emp_access'
  });
};
