/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingevaluationfile1', {
    cascade_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cascade_venue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evaldocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eval_formcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    major_benefits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_benefits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngrating: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingevaluationfile1'
  });
};
