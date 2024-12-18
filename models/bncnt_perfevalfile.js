/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bncnt_perfevalfile', {
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
    perfevaldocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_hrlist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_hrposted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_last: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    canceltyp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    period_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    period_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    period_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    purpcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rater_empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rater_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rater_poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    irating_totpart1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    irating_totpart2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    irating_totpart3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totpart1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totpart2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totpart3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totall: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totequi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ratee_strength_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_comments_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_afi_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_ap_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_ap_timeline: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bncnt_perfevalfile'
  });
};
