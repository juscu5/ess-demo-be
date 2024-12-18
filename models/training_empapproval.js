/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_empapproval', {
    allow_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    decline_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    confirm_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_registered: {
      type: DataTypes.DATEONLY,
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
    isapprove: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_allowed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_final: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_joining: {
      type: DataTypes.INTEGER,
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
    transferred: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trng_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'training_empapproval'
  });
};
