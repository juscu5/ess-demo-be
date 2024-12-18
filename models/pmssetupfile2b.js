/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2b', {
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2b_subdrycde_cricde_unique"
    },
    cridsc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    cridsc2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    criper: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isbalanced: {
      type: DataTypes.INTEGER,
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
      unique: "pmssetupfile2b_subdrycde_cricde_unique"
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2b'
  });
};
