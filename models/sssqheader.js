/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sssqheader', {
    appmon: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    apqtr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    datepaid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    diskno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    eridn: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ernme: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    quarter: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    reccd: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sbrno: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sssqheader'
  });
};
