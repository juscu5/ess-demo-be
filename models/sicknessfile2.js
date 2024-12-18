/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sicknessfile2', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salcreamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    salcrebasis: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    salcremon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    salcreyear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sickdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sicknessfile2'
  });
};
