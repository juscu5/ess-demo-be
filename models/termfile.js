/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('termfile', {
    newtrmcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oldtrmcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trmactcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    trmcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trmday: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    trmdsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    trmper: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    trmtypcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    trmtypdsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'termfile'
  });
};
