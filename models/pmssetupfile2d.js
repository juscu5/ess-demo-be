/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2d', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2d_subkeycde_subdrycde_unique"
    },
    subkeycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2d_subkeycde_subdrycde_unique"
    },
    subkeydsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2d'
  });
};
