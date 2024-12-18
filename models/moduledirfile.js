/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moduledirfile', {
    module: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sublevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submodule: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'moduledirfile'
  });
};
