/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emailmessagesetupfile_ess', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    etitle: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "ESS PASSWORD RESET"
    },
    ebody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eregard: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "Regards,"
    },
    esender: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "ADMIN"
    },
    eaddpos: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "ADMIN / Caloocan City"
    },
    esal: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "Good day Sir / Ma''''''''am,"
    },
    eformt: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "||"
    }
  }, {
    sequelize,
    tableName: 'emailmessagesetupfile_ess'
  });
};
