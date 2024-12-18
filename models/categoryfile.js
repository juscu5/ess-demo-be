/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoryfile', {
    catcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    catcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "categoryfile_catcode_subdrycde_unique"
    },
    catdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    catdsc: {
      type: DataTypes.STRING(100),
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
      unique: "categoryfile_catcode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'categoryfile'
  });
};
