/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_employeeschool', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    enddte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    schave: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    schcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    schcourse: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    schdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    schlevel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    schyear: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    strtdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: false
    },
    trndtetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_employeeschool'
  });
};
