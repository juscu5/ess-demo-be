/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile_wiz', {
    empcode: {
      type: DataTypes.STRING(20),
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
    },
    seccde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    secscore: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sec_percentage: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile_wiz'
  });
};
