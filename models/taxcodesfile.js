/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxcodesfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "taxcodesfile_subdrycde_taxcode_unique"
    },
    taxcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "taxcodesfile_subdrycde_taxcode_unique"
    },
    taxdescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    taxexemption: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'taxcodesfile'
  });
};
