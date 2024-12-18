/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cvlstatfile', {
    cvlstat: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "cvlstatfile_cvlstat_subdrycde_unique"
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
      unique: "cvlstatfile_cvlstat_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'cvlstatfile'
  });
};
