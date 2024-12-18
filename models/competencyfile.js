/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('competencyfile', {
    compecde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    compedsc: {
      type: DataTypes.STRING(100),
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
    tableName: 'competencyfile'
  });
};
