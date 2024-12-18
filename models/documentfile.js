/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documentfile', {
    doccode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "documentfile_doccode_subdrycde_unique"
    },
    docdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    showinonlineapp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "documentfile_doccode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'documentfile'
  });
};
