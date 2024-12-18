/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offboardingcategfile2', {
    befaft: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dtefilter: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    duedtetype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    range_interval: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    },
    taskcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    taskdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    is_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_remarks: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_signatory: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    signatory_ctr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_required: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_required_attach: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'offboardingcategfile2'
  });
};
