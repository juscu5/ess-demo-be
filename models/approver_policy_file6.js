/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approver_policy_file6', {
    approvercode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'approver_policy_file6'
  });
};
