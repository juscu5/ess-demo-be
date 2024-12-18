/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('separationfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sepcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "separationfile_sepcde_subdrycde_unique"
    },
    sepdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sep_empcount: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "separationfile_sepcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'separationfile'
  });
};
