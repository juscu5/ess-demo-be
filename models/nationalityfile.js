/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nationalityfile', {
    natcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "nationalityfile_natcde_subdrycde_unique"
    },
    natdsc: {
      type: DataTypes.STRING(100),
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
      unique: "nationalityfile_natcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'nationalityfile'
  });
};
