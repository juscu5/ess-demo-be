/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offboardingtaskstatusfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offboardtaskstatcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "offboardingtaskstatusfile_offboardtaskstatcode_subdrycde"
    },
    offboardtaskstatdesc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "offboardingtaskstatusfile_offboardtaskstatcode_subdrycde"
    }
  }, {
    sequelize,
    tableName: 'offboardingtaskstatusfile'
  });
};
