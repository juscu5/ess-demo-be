/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('costcntrgrpfile', {
    costgrpcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    costgrpdesc: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    tableName: 'costcntrgrpfile'
  });
};
