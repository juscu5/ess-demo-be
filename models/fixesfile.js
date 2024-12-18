/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fixesfile', {
    fixcde: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    fixdesc: {
      type: DataTypes.STRING(300),
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
    tableName: 'fixesfile'
  });
};
