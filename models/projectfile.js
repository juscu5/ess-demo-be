/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectfile', {
    cuscde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locationid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "projectfile_prjcde_subdrycde_unique"
    },
    prjdsc: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "projectfile_prjdsc_subdrycde_unique"
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
      unique: "projectfile_prjdsc_subdrycde_unique"
    },
    dailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'projectfile'
  });
};
