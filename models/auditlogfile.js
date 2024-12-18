/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditlogfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prjcde_from: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prjcde_to: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dailyrate_from: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dailyrate_to: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auditlogfile'
  });
};
