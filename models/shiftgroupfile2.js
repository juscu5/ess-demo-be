/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shiftgroupfile2', {
    dtefrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shiftgroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    upd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shiftgroupfile2'
  });
};
