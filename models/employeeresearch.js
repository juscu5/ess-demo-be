/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeresearch', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    resdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    respurpose: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    resresult: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    restitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeresearch'
  });
};
