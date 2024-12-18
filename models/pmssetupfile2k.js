/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2k', {
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2k_cricde_scrcde_unique"
    },
    cricdef: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scrcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2k_cricde_scrcde_unique"
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2k'
  });
};
