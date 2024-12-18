/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approverlevelfile', {
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqapp: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'approverlevelfile'
  });
};
