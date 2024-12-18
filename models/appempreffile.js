/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appempreffile', {
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    connum: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    refrel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appempreffile'
  });
};
