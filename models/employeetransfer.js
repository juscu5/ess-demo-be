/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeetransfer', {
    branchcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    is_applied: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_applied_ess: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_expired: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_original: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    poscode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    send_email_approve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    send_email_conflict: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    send_email_expired: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    type_trans: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeetransfer'
  });
};
