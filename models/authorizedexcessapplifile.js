/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorizedexcessapplifile', {
    actdte: {
      type: DataTypes.DATEONLY,
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
    excesscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    excesshrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    inmildatetime: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    lessbrk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ndhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
      type: DataTypes.DATEONLY,
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
    tableName: 'authorizedexcessapplifile'
  });
};
