/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shlateundertimepolicyfile', {
    ltuthrpen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shiftcode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    totltut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'shlateundertimepolicyfile'
  });
};
