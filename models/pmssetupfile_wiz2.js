/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile_wiz2', {
    lvleval: {
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
    tableName: 'pmssetupfile_wiz2'
  });
};
