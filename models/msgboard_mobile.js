/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('msgboard_mobile', {
    active: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dte_posted: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expiration_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expiration_range: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiration_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    posted_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    show_field: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    show_field_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    show_table: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'msgboard_mobile'
  });
};
