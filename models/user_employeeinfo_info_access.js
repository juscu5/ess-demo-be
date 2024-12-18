/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_employeeinfo_info_access', {
    access_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    colname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fielddesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    module_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    submenid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_employeeinfo_info_access'
  });
};
