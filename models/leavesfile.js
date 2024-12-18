/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('leavesfile', {
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    appabsent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    applate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    apput: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dmlimit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00000
    },
    dmperiod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    glcrecde: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    glcredep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gldebcde: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    gldebdep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    inactive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inc13: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inc1601c_15: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inc1601c_16: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incallow1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incallow2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incallow3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incallow4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incallow5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incded1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incded2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incded3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incded4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incded5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incecola: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incph: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incpi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incsss: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inctax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incytdgropay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_sl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    leavescode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "leavesfile_leavescode_subdrycde_unique"
    },
    leavesdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mustuse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    newleavescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oldleavescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    setup1601c: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "leavesfile_leavescode_subdrycde_unique"
    },
    taxclass: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    w2num: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    w2num08: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    withoutpay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    glcrecde2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    glcredep2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gldebcde2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    gldebdep2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    incretro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    w2num08_new: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_edo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incgsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'leavesfile',
    timestamps: false,
  });
};