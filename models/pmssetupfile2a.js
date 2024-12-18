/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2a', {
    ispercentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    seccde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    secdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    secdsc2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secper: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2a'
  });
};
