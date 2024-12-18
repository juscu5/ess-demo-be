/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfilek', {
    apcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfilek_apcode_subdrycde_unique"
    },
    apsentence: {
      type: DataTypes.STRING(255),
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
      unique: "pmssetupfilek_apcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'pmssetupfilek'
  });
};
