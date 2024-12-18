/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schoollevelfile', {
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    schoollevel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'schoollevelfile'
  });
};
