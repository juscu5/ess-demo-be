/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('msgboardnotfile', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    msgid: {
      type: DataTypes.INTEGER,
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
    tableName: 'msgboardnotfile'
  });
};
