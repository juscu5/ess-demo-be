/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetsubfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "assetsubfile_subcde_subdrycde_unique"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "assetsubfile_subcde_subdrycde_unique"
    },
    subdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assetsubfile'
  });
};
