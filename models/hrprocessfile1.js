/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrprocessfile1', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "hrprocessfile1_subdrycde_processcde_unique"
    },
    processnme: {
      type: DataTypes.STRING(200),
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
      unique: "hrprocessfile1_subdrycde_processcde_unique"
    }
  }, {
    sequelize,
    tableName: 'hrprocessfile1'
  });
};
