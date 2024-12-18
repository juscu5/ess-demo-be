/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paygroup13thmonth', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    '13compcode': {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    paycycle: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    '13comcremon1': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '13comcremon2': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '13comcreyer1': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '13comcreyer2': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cycleno1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cycleno2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paygroup13thmonth'
  });
};
