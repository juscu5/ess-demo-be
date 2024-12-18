/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mlatla', {
    mlatlacde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "mlatla_mlatlacde_subdrycde_unique"
    },
    mlatladesc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "mlatla_mlatlacde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'mlatla'
  });
};
