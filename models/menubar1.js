/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menubar1', {
    menbargrp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    picicon: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sortkey: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'menubar1'
  });
};
