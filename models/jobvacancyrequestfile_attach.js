/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobvacancyrequestfile_attach', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    jvrdocnum: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    filename_orig: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    show_olapp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'jobvacancyrequestfile_attach'
  });
};
