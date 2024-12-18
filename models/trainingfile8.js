/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfile8', {
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    amountold: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    spkrecid: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'trainingfile8'
  });
};
