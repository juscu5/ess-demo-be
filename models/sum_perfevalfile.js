/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sum_perfevalfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    perfdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    iscancel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    canceltyp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
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
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
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
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reviewperiod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reviewdate: {
      type: DataTypes.DATEONLY,
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
    recomeffdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    type_opt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rank_opt: {
      type: DataTypes.STRING(50),
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
    ratee_weakness_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_devtrn_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    devplanrater_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rater_evalrecom_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ratee_signature: {
      type: DataTypes.TEXT,
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
    reviewperiod_datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reviewperiod_dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    decline_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    acceptance_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_hrposted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acceptance_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acceptedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    acceptance_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sum_perfevalfile'
  });
};
