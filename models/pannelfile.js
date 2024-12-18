/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pannelfile', {
    pannelname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "pannelfile_pannelname_subdrycde_unique"
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
      unique: "pannelfile_pannelname_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'pannelfile'
  });
};
