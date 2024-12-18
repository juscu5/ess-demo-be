/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectfilelocid', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    locationid: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'projectfilelocid'
  });
};
