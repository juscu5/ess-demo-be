/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meritfile', {
    meritcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    meritdesc: {
      type: DataTypes.STRING(100),
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
    tableName: 'meritfile'
  });
};
