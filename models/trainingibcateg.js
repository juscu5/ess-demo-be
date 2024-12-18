/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingibcateg', {
    ibcategcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "trainingibcateg_ibcategcde_subdrycde_unique"
    },
    ibcategdsc: {
      type: DataTypes.STRING(255),
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
      unique: "trainingibcateg_ibcategcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'trainingibcateg'
  });
};
