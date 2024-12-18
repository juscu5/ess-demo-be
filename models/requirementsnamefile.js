/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requirementsnamefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    requirementcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "requirementsnamefile_requirementcde_subdrycde_unique"
    },
    requirementname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "requirementsnamefile_requirementcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'requirementsnamefile'
  });
};
