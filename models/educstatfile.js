/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('educstatfile', {
    disp_online_app: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    statcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "educstatfile_subdrycde_statcode_unique"
    },
    statdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "educstatfile_subdrycde_statcode_unique"
    }
  }, {
    sequelize,
    tableName: 'educstatfile'
  });
};
