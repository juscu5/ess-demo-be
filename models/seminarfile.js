/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seminarfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    semcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    semdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'seminarfile'
  });
};
