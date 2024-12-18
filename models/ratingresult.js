/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ratingresult', {
    absent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    atla: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lateut: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    prevrtg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ratee: {
      type: DataTypes.STRING(15),
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
    },
    ucp: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ratingresult'
  });
};
