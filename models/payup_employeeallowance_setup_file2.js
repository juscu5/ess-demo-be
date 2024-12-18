/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payup_employeeallowance_setup_file2', {
    allowancecde: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
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
    }
  }, {
    sequelize,
    tableName: 'payup_employeeallowance_setup_file2'
  });
};
