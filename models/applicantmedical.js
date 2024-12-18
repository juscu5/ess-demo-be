/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantmedical', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    medcen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    meddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    medfin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    medrem: {
      type: DataTypes.STRING(200),
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
    tableName: 'applicantmedical'
  });
};
