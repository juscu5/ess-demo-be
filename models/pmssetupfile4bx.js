/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile4bx', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    overall: {
      type: DataTypes.STRING(10),
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
    S1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    S2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    S3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    S4: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    S5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sumtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile4bx'
  });
};
