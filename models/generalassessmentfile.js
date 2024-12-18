/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generalassessmentfile', {
    assesscde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    assessdesc: {
      type: DataTypes.STRING(200),
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
    tableName: 'generalassessmentfile'
  });
};
