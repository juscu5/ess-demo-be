/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeaward', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    awardcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    awarddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    awarddesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    awardexternal: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    awardissuedby: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeaward'
  });
};
