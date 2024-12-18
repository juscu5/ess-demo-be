/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile7', {
    comment: {
      type: DataTypes.STRING(255),
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
    },
    seccde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    secfrml: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    secfscr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    secrwscr: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perfevalfile7'
  });
};
