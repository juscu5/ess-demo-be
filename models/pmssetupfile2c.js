/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2c', {
    keycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keydsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    keyper: {
      type: DataTypes.INTEGER,
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
    tableName: 'pmssetupfile2c'
  });
};
