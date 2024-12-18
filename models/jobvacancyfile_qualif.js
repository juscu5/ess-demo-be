/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobvacancyfile_qualif', {
    docnum: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    otherqualicde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    otherqualidesc: {
      type: DataTypes.STRING(255),
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
    }
  }, {
    sequelize,
    tableName: 'jobvacancyfile_qualif'
  });
};
