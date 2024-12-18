/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areafile', {
    arecde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "areafile_arecde_subdrycde_unique"
    },
    aredsc: {
      type: DataTypes.STRING(150),
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
      allowNull: true,
      unique: "areafile_arecde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'areafile'
  });
};
