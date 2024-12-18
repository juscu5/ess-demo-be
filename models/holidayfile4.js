/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holidayfile4', {
    branchcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    holday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    holmon: {
      type: DataTypes.INTEGER,
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
    tableName: 'holidayfile4'
  });
};
