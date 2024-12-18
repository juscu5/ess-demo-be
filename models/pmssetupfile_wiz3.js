/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile_wiz3', {
    incident: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    incidentdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lvl: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pmsdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile_wiz3'
  });
};
