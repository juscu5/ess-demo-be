/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pis_organization', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pis_organization'
  });
};
