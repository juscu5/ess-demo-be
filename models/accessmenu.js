/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessmenu', {
    menu: {
      type: DataTypes.STRING(250),
      allowNull: false
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
    },
    userip: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accessmenu'
  });
};
