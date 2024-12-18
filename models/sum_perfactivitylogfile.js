/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sum_perfactivitylogfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    usrdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usrtme: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    perfdocnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sum_perfactivitylogfile'
  });
};
