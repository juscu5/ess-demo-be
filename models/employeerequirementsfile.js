/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeerequirementsfile', {
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
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    requirement: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeerequirementsfile'
  });
};
