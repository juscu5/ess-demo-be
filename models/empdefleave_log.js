/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empdefleave_log', {
    companycode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leavescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leavesearned: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leavesearnedhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leaveskey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leavesleft: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leaveslefthrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leavesused: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leavesusedhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    logdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    logpar: {
      type: DataTypes.STRING(10),
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
    pcname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tmpbeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpearned: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpleft: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpused: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    }
  }, {
    sequelize,
    tableName: 'empdefleave_log'
  });
};
