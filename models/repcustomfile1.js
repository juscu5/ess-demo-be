/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repcustomfile1', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    repdsc: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repcustomfile1'
  });
};
