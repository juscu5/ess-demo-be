/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('holidayfile', {
    chkall: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    holday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    holdsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    holmon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    holtyp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
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
    tableName: 'holidayfile',
    timestamps: false
  });
};