/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantchecklistfile', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dateexpire: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateissue: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lstcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lstdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remark: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantchecklistfile'
  });
};
