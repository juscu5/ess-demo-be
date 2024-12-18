/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rankfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rnkcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "rankfile_rnkcde_subdrycde_unique"
    },
    rnkdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "rankfile_rnkcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'rankfile'
  });
};
