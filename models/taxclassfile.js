/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxclassfile', {
    allowancefile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leavesfile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otherdeductions: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otherearnings: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pieceratefile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ratestable: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
      unique: "taxclassfile_subdrycde_taxclass_unique"
    },
    taxclass: {
      type: DataTypes.STRING(3),
      allowNull: true,
      unique: "taxclassfile_subdrycde_taxclass_unique"
    },
    taxclassdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    taxclasssort: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taxclassfile'
  });
};
