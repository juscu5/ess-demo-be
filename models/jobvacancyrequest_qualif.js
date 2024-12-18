/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobvacancyrequest_qualif', {
    docnum: {
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
    },
    trntyp: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jobvacancyrequest_qualif'
  });
};
