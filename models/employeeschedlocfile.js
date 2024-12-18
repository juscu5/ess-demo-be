/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeschedlocfile', {
    ab: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    abcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    actdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    auot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    breakmins: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    cday: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dtin1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtotin: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtotout: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtrcode: {
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
    excessot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    gpsloccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    holtyp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    in1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    in2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    late: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    legtyp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    legtypx: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    logremarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ltcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    manualcompute: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    multibreak: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    otin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    otout: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    out2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    paydte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    periodcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regnd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regndot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    regot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rst: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    shiftbatch: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    shiftgroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmpndot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    tmpot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    totalot: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    ut: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    utcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'employeeschedlocfile'
  });
};
