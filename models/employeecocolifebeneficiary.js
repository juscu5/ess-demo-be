/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeecocolifebeneficiary', {
    bday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    benage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    benname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
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
    relationship: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeecocolifebeneficiary'
  });
};
