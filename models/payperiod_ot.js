/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payperiod_ot', {
    colorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payrecid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ratescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratestype: {
      type: DataTypes.STRING(50),
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
    tableName: 'payperiod_ot'
  });
};
