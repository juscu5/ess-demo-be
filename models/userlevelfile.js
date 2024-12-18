/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userlevelfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrlvl: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userlevelfile'
  });
};
