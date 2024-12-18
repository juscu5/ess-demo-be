/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wfhreqfile4_attach', {
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    filename_orig: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    wfhdocnum: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'wfhreqfile4_attach'
  });
};
