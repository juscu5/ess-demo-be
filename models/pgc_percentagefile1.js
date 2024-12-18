/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pgc_percentagefile1', {
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    perfrom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perto: {
      type: DataTypes.INTEGER,
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
    tableName: 'pgc_percentagefile1'
  });
};
