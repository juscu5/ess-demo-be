/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportfile', {
    pageno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pagetext: {
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
    tableName: 'reportfile'
  });
};
