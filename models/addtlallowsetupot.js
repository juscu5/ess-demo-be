/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addtlallowsetupot', {
    allowcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ecolaincotrates: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ecolasetup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratescode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratestype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    setupcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'addtlallowsetupot'
  });
};
