/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetingfile', {
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    meetingcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    meetingdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    meetingdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poscode: {
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
    tableName: 'meetingfile'
  });
};
