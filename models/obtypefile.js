/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obtypefile', {
    obtypcde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    obtypdsc: {
      type: DataTypes.STRING(200),
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
    tableName: 'obtypefile'
  });
};
