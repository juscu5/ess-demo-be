/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salarygradefile1', {
    maxsalrange: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    minsalrange: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "salarygradefile1_subdrycde_salcode_unique"
    },
    saldesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "salarygradefile1_subdrycde_salcode_unique"
    }
  }, {
    sequelize,
    tableName: 'salarygradefile1'
  });
};
