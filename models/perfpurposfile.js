/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfpurposfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    purpcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    purpdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    purporder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perfpurposfile'
  });
};
