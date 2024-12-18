/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alertsfile1', {
    dte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ht: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1888
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1888
    },
    xpos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    ypos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'alertsfile1'
  });
};
