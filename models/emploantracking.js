/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emploantracking', {
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    num1: {
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
    text1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    text2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    text3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    text4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    text5: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emploantracking'
  });
};
