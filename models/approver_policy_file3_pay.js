/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approver_policy_file3_pay', {
    approvercode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trntyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'approver_policy_file3_pay'
  });
};
