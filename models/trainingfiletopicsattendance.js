/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfiletopicsattendance', {
    day_index: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingfiletopicsattendance'
  });
};
