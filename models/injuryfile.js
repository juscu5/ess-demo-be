/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('injuryfile', {
    injcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "injuryfile_injcde_subdrycde_unique"
    },
    injdsc: {
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
      unique: "injuryfile_injcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'injuryfile'
  });
};
