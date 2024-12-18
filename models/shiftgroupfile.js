/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shiftgroupfile', {
    newshiftgroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nodays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    noline: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    oldshiftgroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shiftgroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    shiftgroupdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    startdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shiftgroupfile'
  });
};
