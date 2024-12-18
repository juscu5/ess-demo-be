/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repalphaheader', {
    field1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field10: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field11: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field12: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field13: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field14: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field15: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field16: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field17: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field18: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field19: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field20: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field21: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field22: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field23: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field24: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field25: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field26: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field27: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field28: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field29: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field30: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field31: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field32: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field33: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field34: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field35: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field36: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field37: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field38: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field39: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field40: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field9: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repalphaheader'
  });
};
