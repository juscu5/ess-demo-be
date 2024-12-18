/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_empinforeq_educ', {
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    enddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
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
    schave: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    schcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    schcourse: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    schdesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    schlevel: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    schyear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    strtdte: {
      type: DataTypes.DATEONLY,
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
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_empinforeq_educ'
  });
};
