/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sizefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sizecde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "sizefile_sizecde_subdrycde_unique"
    },
    sizedsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "sizefile_sizecde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'sizefile'
  });
};
