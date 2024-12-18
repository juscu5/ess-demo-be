/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pis_degree_title', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pis_degree_title'
  });
};
