/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unitcodefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    unitcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unitdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unitcodefile'
  });
};
