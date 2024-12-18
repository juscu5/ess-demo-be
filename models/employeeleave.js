/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeleave', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    leavebal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leavecode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leavedate1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    leavedate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    leaveearn: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    leaveuse: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
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
    }
  }, {
    sequelize,
    tableName: 'employeeleave'
  });
};
