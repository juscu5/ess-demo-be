/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alutype', {
    cde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'alutype'
  });
};
