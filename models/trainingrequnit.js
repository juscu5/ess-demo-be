/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingrequnit', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    requnitcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "trainingrequnit_requnitcde_subdrycde_unique"
    },
    requnitdsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "trainingrequnit_requnitcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'trainingrequnit'
  });
};
