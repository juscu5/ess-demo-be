/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empviewgovtcont', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    credityear: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num10: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num11: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num12: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num4: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num6: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num7: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num8: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num9: {
      type: DataTypes.DECIMAL,
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
    tableName: 'empviewgovtcont'
  });
};
