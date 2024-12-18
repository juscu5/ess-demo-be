/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fixlocfile', {
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    allowdist: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    gpsloccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL,
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
    tableName: 'fixlocfile'
  });
};
