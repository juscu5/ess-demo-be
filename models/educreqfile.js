/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('educreqfile', {
    educreqcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    educreqdsc: {
      type: DataTypes.STRING(30),
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
    tableName: 'educreqfile'
  });
};
