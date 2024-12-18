/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onboardingfile', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_done: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    field_val: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    filepath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taskcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    task_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'onboardingfile'
  });
};
