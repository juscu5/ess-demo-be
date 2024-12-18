/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('typefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    typecode: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "typefile_typecode_unique"
    },
    typedesc: {
      type: DataTypes.STRING(35),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'typefile'
  });
};
