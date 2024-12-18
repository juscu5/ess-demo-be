/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licensefile', {
    licode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "licensefile_licode_subdrycde_unique"
    },
    lidesc: {
      type: DataTypes.STRING(50),
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
      unique: "licensefile_licode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'licensefile'
  });
};
