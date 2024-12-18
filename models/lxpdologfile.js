/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lxpdologfile', {
    lxaction: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lxfield: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lxlog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lxparam: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lxtable: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trndate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lxpdologfile'
  });
};
