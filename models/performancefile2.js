/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('performancefile2', {
    cricde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cridsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trncde: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'performancefile2'
  });
};
