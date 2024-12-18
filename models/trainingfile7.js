/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfile7', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ibrecid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ibtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ibtotalold: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trainingdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingfile7'
  });
};
