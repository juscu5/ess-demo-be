/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schoolyearfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "schoolyearfile_sycde_subdrycde_unique"
    },
    sycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "schoolyearfile_sycde_subdrycde_unique"
    },
    sydsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'schoolyearfile'
  });
};
