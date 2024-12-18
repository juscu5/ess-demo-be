/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_currencyfile', {
    curcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "currencyfile_curcde_subdrycde_unique"
    },
    curdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    curdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    currte: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    cursym: {
      type: DataTypes.STRING(3),
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
      unique: "currencyfile_curcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'tmplt_currencyfile'
  });
};
