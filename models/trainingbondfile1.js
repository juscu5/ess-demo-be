/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingbondfile1', {
    bond_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dte_effective: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    duration_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration_year: {
      type: DataTypes.INTEGER,
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
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingbondfile1'
  });
};
