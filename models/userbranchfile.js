/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userbranchfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userbranchfile'
  });
};
