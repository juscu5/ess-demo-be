/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtr_rates', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dtrdocnum: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ratescode: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    noofhrs: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dtr_rates'
  });
};
