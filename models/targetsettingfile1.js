/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('targetsettingfile1', {
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
    tsdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "targetsettingfile1_tsdocnum_unique"
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
    trndte: {
      type: DataTypes.DATE,
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
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    finalviewstat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_last: {
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
    period_from: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    period_to: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    purpcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    divcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rater_empcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rater_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    rater_poscode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    posted_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    posted_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'targetsettingfile1'
  });
};
