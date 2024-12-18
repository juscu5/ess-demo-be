/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupcodefile', {
    grpcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    grpdesc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'groupcodefile'
  });
};
