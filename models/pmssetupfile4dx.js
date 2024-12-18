/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile4dx', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(50),
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
      allowNull: true
    },
    x1_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x1_empname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    x1_rad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    x2_imehead: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    x2_imeheaddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    x2_rad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    x2_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile4dx'
  });
};
