/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regionprovcityfile', {
    citycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "regionprovcityfile_citycde_prov_regioncode_unique"
    },
    prov: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "regionprovcityfile_citycde_prov_regioncode_unique"
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    regioncode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "regionprovcityfile_citycde_prov_regioncode_unique"
    }
  }, {
    sequelize,
    tableName: 'regionprovcityfile'
  });
};
