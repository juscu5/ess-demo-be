/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('writtenfreqfile', {
    freqlvl: {
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
    tableName: 'writtenfreqfile'
  });
};
