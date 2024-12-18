/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usercompanyfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usercompanyfile'
  });
};
