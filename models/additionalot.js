/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('additionalot', {
    payrecid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ratescode: {
      type: DataTypes.STRING(20),
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
    tableName: 'additionalot'
  });
};
