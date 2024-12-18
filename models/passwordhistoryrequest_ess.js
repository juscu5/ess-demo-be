/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('passwordhistoryrequest_ess', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    dtereq: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtereqexp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    usrcde_account: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'passwordhistoryrequest_ess'
  });
};
