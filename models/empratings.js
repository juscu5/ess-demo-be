/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empratings', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratingcde: {
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
    },
    sycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empratings'
  });
};
