/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantcertificate', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    certdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    datevalid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    score: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantcertificate'
  });
};
