/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('splitsetup', {
    creditmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credityear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    firsthalf: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payrollrun: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    procdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    secondhalf: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tablename: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'splitsetup'
  });
};
