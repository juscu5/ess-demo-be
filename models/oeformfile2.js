/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oeformfile2', {
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    expensecode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    oeformdocnum: {
      type: DataTypes.STRING(50),
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
    tableName: 'oeformfile2'
  });
};
