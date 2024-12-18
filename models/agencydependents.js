/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agencydependents', {
    agencycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    relation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    attch_filename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agencydependents'
  });
};
