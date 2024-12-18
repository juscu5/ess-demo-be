/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recruitmentnavigationuser_menus', {
    menid: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recruitmentnavigationuser_menus'
  });
};
