/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ottypefile', {
    otcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    otdsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ottype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ottypefile'
  });
};
