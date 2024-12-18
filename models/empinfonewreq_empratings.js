/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_empratings', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratingcde: {
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
    sycde: {
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
    tableName: 'empinfonewreq_empratings'
  });
};
