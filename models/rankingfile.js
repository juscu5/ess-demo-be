/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rankingfile', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ranking: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rankingfile'
  });
};
