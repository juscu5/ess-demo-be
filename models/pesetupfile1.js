/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesetupfile1', {
    evcricde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evcridsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evtitle: {
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
    tableName: 'pesetupfile1'
  });
};
