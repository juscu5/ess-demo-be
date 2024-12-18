/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pis_licensure_status', {
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pis_licensure_status'
  });
};
