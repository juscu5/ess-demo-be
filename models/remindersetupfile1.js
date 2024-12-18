/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remindersetupfile1', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    xcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    xdeadline: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    xtable: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'remindersetupfile1'
  });
};
