/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holidayfile2', {
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
    tableName: 'holidayfile2'
  });
};
