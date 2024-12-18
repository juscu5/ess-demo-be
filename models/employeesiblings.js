/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeesiblings', {
    cage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ccivilstatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cemployement: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cgender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    connum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cschool: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    menincapacity: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'employeesiblings'
  });
};
