/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empfile_submodule_par', {
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    submodulecde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    submoduledesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empfile_submodule_par'
  });
};
