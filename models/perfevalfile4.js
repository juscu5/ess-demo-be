/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile4', {
    keycode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    keyscore: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lvleval: {
      type: DataTypes.STRING(30),
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
    tableName: 'perfevalfile4'
  });
};
