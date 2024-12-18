/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obreqfile4_attach', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    obdocnum: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    filename_orig: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'obreqfile4_attach'
  });
};
