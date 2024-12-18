/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empreqfile3', {
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    contactno: {
      type: DataTypes.STRING(100),
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
    menincapacity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    relationship: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empreqfile3'
  });
};
