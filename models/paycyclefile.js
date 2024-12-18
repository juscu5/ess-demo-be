/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paycyclefile', {
    paycycle: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "paycyclefile_paycycle_subdrycde_unique"
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
      unique: "paycyclefile_paycycle_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'paycyclefile'
  });
};
