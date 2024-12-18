/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adjovertimefile2', {
    adjotdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dteapproved: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'adjovertimefile2'
  });
};
