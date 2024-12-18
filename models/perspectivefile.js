/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perspectivefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    perspcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    perspdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perspectivefile'
  });
};
