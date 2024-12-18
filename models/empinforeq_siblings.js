/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinforeq_siblings', {
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cancel_reason2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cemployement: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cgender: {
      type: DataTypes.STRING(10),
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
    tableName: 'empinforeq_siblings'
  });
};
