/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expensetypefile', {
    expensecde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "expensetypefile_subdrycde_expensecde_unique"
    },
    expensedesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isdefault: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    obhrs: {
      type: DataTypes.INTEGER,
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
      unique: "expensetypefile_subdrycde_expensecde_unique"
    }
  }, {
    sequelize,
    tableName: 'expensetypefile'
  });
};
