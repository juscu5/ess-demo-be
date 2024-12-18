/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logindevicelist', {
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
    device: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    logindtetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rstmidnight: {
      type: DataTypes.DATE,
      allowNull: true
    },
    allwrsnddtetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    otp_pass: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    otp_resendctr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    otp_failedctr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    device_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'logindevicelist'
  });
};
