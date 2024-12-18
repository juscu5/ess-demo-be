/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goalsettingsfile1_log', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    goaldocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    aprlvl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aprcnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_last: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_hrlist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_hrposted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    canceltyp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    acceptance_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appyear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ratee_empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratee_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    joblvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    revised_date: {
      type: DataTypes.DATEONLY,
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
    rater_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appraisal_period: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appraisal_period_datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    appraisal_period_dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ratee_signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_strength_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_weakness_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    devplanspv_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    devplanratee_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    acceptance_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acceptedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    log_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approver_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    approver_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'goalsettingsfile1_log'
  });
};
