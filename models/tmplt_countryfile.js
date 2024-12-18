/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_countryfile', {
    cntrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "countryfile_subdrycde_cntrycde_unique"
    },
    cntrydsc: {
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
      unique: "countryfile_subdrycde_cntrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'tmplt_countryfile'
  });
};
