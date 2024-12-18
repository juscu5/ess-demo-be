/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loadconfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loadhost: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loaddb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loaduser: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loadpw: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loaddbtype: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'loadconfile'
  });
};
