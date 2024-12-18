/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subcategoryfile', {
    category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subcatcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subcatdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subcategoryfile'
  });
};
