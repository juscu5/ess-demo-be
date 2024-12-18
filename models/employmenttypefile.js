/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employmenttypefile', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emptypcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "employmenttypefile_emptypcde_subdrycde_unique"
    },
    emptypdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    is_required_setup: {
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
      unique: "employmenttypefile_emptypcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'employmenttypefile'
  });
};
