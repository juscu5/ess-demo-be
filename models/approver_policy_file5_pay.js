/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approver_policy_file5_pay', {
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appfullname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    appremark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dteapproval: {
      type: DataTypes.DATE,
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
    level: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    module: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'approver_policy_file5_pay'
  });
};
