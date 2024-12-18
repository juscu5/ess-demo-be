/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empcustomcolumnfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    colorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    colcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    colinfo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_locked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'empcustomcolumnfile'
  });
};
