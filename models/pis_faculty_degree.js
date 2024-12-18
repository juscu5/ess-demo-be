/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pis_faculty_degree', {
    awards: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    baccdeg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    univ: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pis_faculty_degree'
  });
};
