/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otherqualifile', {
    otherqualicde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "otherqualifile_subdrycde_otherqualicde_unique"
    },
    otherqualidesc: {
      type: DataTypes.STRING(150),
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
      unique: "otherqualifile_subdrycde_otherqualicde_unique"
    }
  }, {
    sequelize,
    tableName: 'otherqualifile'
  });
};
