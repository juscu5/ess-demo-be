/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('costcenterfile', {
    cstcnt: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "costcenterfile_cstcnt_subdrycde_unique"
    },
    devnum: {
      type: DataTypes.STRING(50),
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
      unique: "costcenterfile_subdrycde_ccentercode_unique"
    },
    ccentercode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "costcenterfile_subdrycde_ccentercode_unique"
    },
    ccenterdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'costcenterfile'
  });
};
