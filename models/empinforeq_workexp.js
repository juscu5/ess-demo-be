/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinforeq_workexp', {
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comdsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    datehired: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateterm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empsal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    firstpos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    personinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    is_fixed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empinforeq_workexp'
  });
};
