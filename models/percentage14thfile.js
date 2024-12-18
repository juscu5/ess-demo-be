/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('percentage14thfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    monthfrom: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    monthto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    percent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'percentage14thfile'
  });
};
