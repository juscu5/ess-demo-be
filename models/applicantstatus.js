/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantstatus', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appstatcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appstatdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
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
    statdtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantstatus'
  });
};
