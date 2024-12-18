/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subunitfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "subunitfile_subdrycde_subuntcde_unique"
    },
    subuntcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "subunitfile_subdrycde_subuntcde_unique"
    },
    subuntdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subunitfile'
  });
};
