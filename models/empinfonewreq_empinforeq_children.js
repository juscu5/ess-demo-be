/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_empinforeq_children', {
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cage: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cname: {
      type: DataTypes.STRING(50),
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
    empinfodocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_empinforeq_children'
  });
};
