/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cityfile', {
    citycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    citydesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "citydesc_subdrycde"
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
      unique: "citydesc_subdrycde"
    }
  }, {
    sequelize,
    tableName: 'cityfile'
  });
};
