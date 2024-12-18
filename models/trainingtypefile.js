/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingtypefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "trainingtypefile_subdrycde_trntypcde_unique"
    },
    trntypcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "trainingtypefile_subdrycde_trntypcde_unique"
    },
    trntypdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingtypefile'
  });
};
