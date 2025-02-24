/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrfile', {
    hrcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hrdesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    hrnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'hrfile'
  });
};
