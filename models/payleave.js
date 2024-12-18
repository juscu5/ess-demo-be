/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payleave', {
    companycode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    comstat: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "COMPUTED"
    },
    concashamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    concashdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    concashhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    leaveamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leavedays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leavehh: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    leavehhmm: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    leavehrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leavemm: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    leavescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leavesdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    leavesdatestr: {
      type: DataTypes.STRING(10),
      allowNull: true
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
    leave_dd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leave_hh: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    leave_mm: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrollrun: {
      type: DataTypes.STRING(3),
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
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tmpamount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmpbeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpbeghrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpdays: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    tmpleft: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    w2num: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    withoutpay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    leavedays_equi: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leavehours_equi: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    begbal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    begbalhrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'payleave'
  });
};
