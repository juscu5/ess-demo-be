/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile4a', {
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    critotal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pmsdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'perfevalfile4a'
  });
};
