/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('essdownloadables', {
    formdsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    formfile: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    formpath: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    formtitle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'essdownloadables'
  });
};
