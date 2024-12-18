/* jshint indent: 2 */

const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define('leavedayfile', {
    ampm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_days_to_hrs_conv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leavedaycode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "leavedayfile_subdrycde_leavedaycode_unique"
    },
    leavedaydsc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    noofdays: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    noofhrs: {
      type: DataTypes.DECIMAL,
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
      allowNull: true,
      unique: "leavedayfile_subdrycde_leavedaycode_unique"
    }
  }, {
    sequelize,
    tableName: 'leavedayfile',
    timestamps: false
  });
};