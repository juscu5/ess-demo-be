/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obreqfile3_gpsloc', {
    gps_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gps_dtetim: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    obdocnum: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    obdte: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'obreqfile3_gpsloc'
  });
};
