/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otherearnings_abpar', {
    allowcodeab: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowcodelt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allowcodeut: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    earningscode: {
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
    tableName: 'otherearnings_abpar'
  });
};
