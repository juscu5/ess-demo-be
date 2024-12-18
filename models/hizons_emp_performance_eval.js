/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hizons_emp_performance_eval', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filepath: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    period_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    period_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ratedesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    purpcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hizons_emp_performance_eval'
  });
};
