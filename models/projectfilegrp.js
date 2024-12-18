/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectfilegrp', {
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
    prjcdegrp: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'projectfilegrp'
  });
};
