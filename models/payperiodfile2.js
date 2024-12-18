/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payperiodfile2', {
    code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cycleno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    paycycle: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    paygroup: {
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
    tableName: 'payperiodfile2'
  });
};
