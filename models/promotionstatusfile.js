/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promotionstatusfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    promstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "promstatcde_subdrycde"
    },
    promstatdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "promstatcde_subdrycde"
    }
  }, {
    sequelize,
    tableName: 'promotionstatusfile'
  });
};
