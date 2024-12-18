/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ignite_teachers', {
    admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    auth_key: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    browser_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ip_access: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isadmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    middle_initial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recent_access: {
      type: DataTypes.DATE,
      allowNull: false
    },
    resetdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    resetpwd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sesid: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    subjdept: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    unitdesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    userclass: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrlvl: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrpwd: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ignite_teachers'
  });
};
