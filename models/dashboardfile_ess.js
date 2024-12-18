/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dashboardfile_ess', {
    notifcap: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    notifcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    notifnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notifprg: {
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboardfile_ess'
  });
};
