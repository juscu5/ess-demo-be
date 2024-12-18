/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salarygradefile2', {
    curdesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    maxsal: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    minsal: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    saldesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stepinc: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salarygradefile2'
  });
};
