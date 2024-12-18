/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remindertypefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remtypcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "remindertypefile_remtypcde_subdrycde_unique"
    },
    remtypdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "remindertypefile_remtypcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'remindertypefile'
  });
};
