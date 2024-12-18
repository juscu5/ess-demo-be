/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesetupfile2', {
    evkeycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evkeydsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    keytitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    percde: {
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
    tableName: 'pesetupfile2'
  });
};
