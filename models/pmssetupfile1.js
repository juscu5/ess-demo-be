/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile1', {
    eval_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ftype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isoption1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isoption2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    perdsc: {
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
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile1'
  });
};
