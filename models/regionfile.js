/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regionfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    region: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    regioncode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    regiondesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "regiondesc_subdrycde"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "regiondesc_subdrycde"
    }
  }, {
    sequelize,
    tableName: 'regionfile'
  });
};
