/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ratestable', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "MODIFIED BY LstvPoco ON 16.09.22 17:48"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    setup1601c: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ecolaincotrates: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    ratestype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ratescode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ratesdescription: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    ratesrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    inctax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incsss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    rateskey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w2num: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    oldratescode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    newratescode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    incpi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    inc13: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    taxclass: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    incecola: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incytdgropay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incallow1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incallow2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incallow3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incallow4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incallow5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incded1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incded2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incded3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incded4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incded5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    newrates: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    incexcel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    w2num08: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    inctkm: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ottype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    inc1601c_15: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    inc1601c_16: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    gldebcde: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    glcrecde: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    gldebdep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    glcredep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ratessort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.05 10:03"
    },
    colorder: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: true,
      defaultValue: 0
    },
    w2num08_new: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    incgsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ratestable'
  });
};
