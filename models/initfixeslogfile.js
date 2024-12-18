/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('initfixeslogfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    class_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    function_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'initfixeslogfile'
  });
};
