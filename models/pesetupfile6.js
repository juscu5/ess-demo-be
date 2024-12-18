/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesetupfile6', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evcricde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evcridsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evdsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evecde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evtitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keycde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keydsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    keytitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    perlvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pesetupfile6'
  });
};
