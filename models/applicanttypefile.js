/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicanttypefile', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emptypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emptypdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicanttypefile'
  });
};
