/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('awardfile', {
    awardcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "awardfile_subdrycde_awardcode_unique"
    },
    awarddesc: {
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
      unique: "awardfile_subdrycde_awardcode_unique"
    }
  }, {
    sequelize,
    tableName: 'awardfile'
  });
};
