/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesetupfile5', {
    evcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evcricde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    evdsc: {
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pesetupfile5'
  });
};
