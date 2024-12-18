/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('performancesetupfile2', {
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cridsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    defrat: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    keyindcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keyinddsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    maxrat: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    minrat: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    percde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    percentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    perdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perlvl: {
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
    }
  }, {
    sequelize,
    tableName: 'performancesetupfile2'
  });
};
