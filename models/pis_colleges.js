/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pis_colleges', {
    college: {
      type: DataTypes.STRING(250),
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
    tableName: 'pis_colleges'
  });
};
