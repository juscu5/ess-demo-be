/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helpfile1', {
    mencap: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mengrp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    menidx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    menkey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mensub: {
      type: DataTypes.STRING(100),
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
    tableName: 'helpfile1'
  });
};
