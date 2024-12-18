/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_statusfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    statuscode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "statusfile_subdrycde_statuscode_unique"
    },
    statusdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "statusfile_subdrycde_statuscode_unique"
    }
  }, {
    sequelize,
    tableName: 'tmplt_statusfile'
  });
};
