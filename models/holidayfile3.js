/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holidayfile3', {
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    holday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    holmon: {
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'holidayfile3'
  });
};
