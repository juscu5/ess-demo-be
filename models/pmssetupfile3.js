/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile3', {
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cridsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cridsc2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    criper: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    criscoretyp: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "NONE"
    },
    evallvl: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    isbalanced: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ispercentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keydsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    keyper: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    keyscoretyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perlvl: {
      type: DataTypes.INTEGER,
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
    secdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    secdsc2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    secper: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subkeycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subkeydsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile3'
  });
};
