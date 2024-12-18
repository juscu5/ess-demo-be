/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userloginfile', {
    compname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    logdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    logtim: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userloginfile'
  });
};
