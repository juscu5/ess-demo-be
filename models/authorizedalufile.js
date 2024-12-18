/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorizedalufile', {
    alucode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ess_apprv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    legcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    meritcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    paydte: {
      type: DataTypes.DATEONLY,
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
    tableName: 'authorizedalufile'
  });
};
