/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ranking_levelling', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rnklvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "ranking_levelling_rnklvlcde_subdrycde_unique"
    },
    rnklvldesc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "ranking_levelling_rnklvlcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'ranking_levelling'
  });
};
