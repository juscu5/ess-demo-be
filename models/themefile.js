/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('themefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bgcolor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fontcolor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    verdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uploads: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'themefile'
  });
};
