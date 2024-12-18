/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile3b', {
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    keycde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    legcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    legdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    legfrom: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    legto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(100),
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile3b'
  });
};
