/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locbrnccgrpcostfile', {
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    costgrpcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loccode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'locbrnccgrpcostfile'
  });
};
