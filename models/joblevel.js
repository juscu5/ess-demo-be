/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('joblevel', {
    joblvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "joblevel_joblvlcde_subdrycde_unique"
    },
    joblvldsc: {
      type: DataTypes.STRING(100),
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
      unique: "joblevel_joblvlcde_subdrycde_unique"
    },
    joblvltype: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'joblevel'
  });
};
