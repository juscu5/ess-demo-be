/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userpostingaccessfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trntyp: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userpostingaccessfile'
  });
};
