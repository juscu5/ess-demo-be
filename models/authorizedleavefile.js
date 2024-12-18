/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorizedleavefile', {
    actdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    empcde_nam_paydte: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ess_apprv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    inmildatetime: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    leavescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lessbrk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ndhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ottype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    outmildatetime: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    paydte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    periodcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leavestatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    leavestatus_days: {
      type: DataTypes.INTEGER,
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
    },
    is_processed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'authorizedleavefile'
  });
};
