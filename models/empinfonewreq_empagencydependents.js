/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_empagencydependents', {
    agencycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    relation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    attch_filename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
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
    tableName: 'empinfonewreq_empagencydependents'
  });
};
