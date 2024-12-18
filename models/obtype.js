/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obtype', {
    cde: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "obtype_subdrycde_cde_unique"
    },
    dsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    obtypecde: {
      type: DataTypes.STRING(50),
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
      unique: "obtype_subdrycde_cde_unique"
    }
  }, {
    sequelize,
    tableName: 'obtype'
  });
};
