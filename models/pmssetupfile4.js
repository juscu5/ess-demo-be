/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile4', {
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cricomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    criletter: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    criscore: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    critotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    keycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keydesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keyletter: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    keyscore: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    keytotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lvleval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pmsdocnum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    seccde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile4'
  });
};
