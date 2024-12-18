/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('experiencelevelfile', {
    explvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "experiencelevelfile_explvlcde_subdrycde_unique"
    },
    explvldsc: {
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
      unique: "experiencelevelfile_explvlcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'experiencelevelfile'
  });
};
