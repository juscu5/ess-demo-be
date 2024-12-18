/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile5', {
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kpi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loacde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    loalvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    loascr: {
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
    tableName: 'perfevalfile5'
  });
};
