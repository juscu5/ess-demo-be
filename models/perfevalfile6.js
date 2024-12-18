/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile6', {
    com1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    com2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    com3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keycde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lvl: {
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
    tableName: 'perfevalfile6'
  });
};
