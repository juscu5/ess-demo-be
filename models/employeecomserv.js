/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeecomserv', {
    deptcom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptproj: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deptserv: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATEONLY,
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
    tableName: 'employeecomserv'
  });
};
