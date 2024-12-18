/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('membershipfile', {
    memcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "membershipfile_memcode_subdrycde_unique"
    },
    memdesc: {
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
      unique: "membershipfile_memcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'membershipfile'
  });
};
