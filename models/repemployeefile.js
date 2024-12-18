/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repemployeefile', {
    flddescription: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    flddisplay: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fldname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fldsortorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fldwidth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'repemployeefile'
  });
};
