/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfrating', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ratefrom: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rateto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ratedesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perfrating'
  });
};
