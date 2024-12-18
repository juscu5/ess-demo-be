/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('citizenshipfile', {
    ctncode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "citizenshipfile_ctncode_subdrycde_unique"
    },
    ctndesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "citizenshipfile_ctncode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'citizenshipfile'
  });
};
