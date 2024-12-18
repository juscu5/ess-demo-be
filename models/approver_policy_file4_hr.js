/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approver_policy_file4_hr', {
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appfullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    levelnum: {
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
    trntyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    reqapp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'approver_policy_file4_hr'
  });
};
