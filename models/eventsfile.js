/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventsfile', {
    clr: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    eventcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "eventsfile_eventcde_subdrycde_unique"
    },
    eventdsc: {
      type: DataTypes.STRING(100),
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
      allowNull: true,
      unique: "eventsfile_eventcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'eventsfile'
  });
};
