/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paygroupdef1', {
    autobasic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autopiece: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    compute13thmonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computeph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computepi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computesss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computetax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    computeud: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cycleno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dayswork: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    paycycle: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
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
    taxtype: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paygroupdef1'
  });
};
