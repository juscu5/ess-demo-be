/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_logging', {
    gatenum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    logtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    logtyp: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rfid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    studnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usercde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_logging'
  });
};
