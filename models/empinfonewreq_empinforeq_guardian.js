/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_empinforeq_guardian', {
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
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
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contactno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
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
    relationship: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    reldesc: {
      type: DataTypes.STRING(30),
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
    tableName: 'empinfonewreq_empinforeq_guardian'
  });
};
