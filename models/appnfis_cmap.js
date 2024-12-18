/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appnfis_cmap', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    has_entry: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appnfis_cmap'
  });
};
