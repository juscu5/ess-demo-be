/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfevalfile7a', {
    finalcomment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    finalsecfscr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pmsdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'perfevalfile7a'
  });
};
