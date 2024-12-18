/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('1601c_sec25', {
    cremon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    creyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    w2num18: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    w2num19: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    w2num20: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    w2num25_1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    w2num25_2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    w2num25_3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    w2num25_4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    w2num25_5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    w2num25_6: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    w2num25_7a: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    w2num25_7b: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: '1601c_sec25'
  });
};
