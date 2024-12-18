/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('securityreltrnfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    secreltrncde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    secreltrndsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'securityreltrnfile'
  });
};
