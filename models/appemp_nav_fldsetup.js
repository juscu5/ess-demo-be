/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appemp_nav_fldsetup', {
    alt_lbl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_required: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    par: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    submenid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appemp_nav_fldsetup'
  });
};
