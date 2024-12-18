/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('birparameters', {
    ammended: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    branchemployerCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    employertin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    inc9ain11: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nosheets: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rdocode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    region: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    returnperiod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'birparameters'
  });
};
