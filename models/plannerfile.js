/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plannerfile', {
    dtefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    priority: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    timfrom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    timto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    todo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plannerfile'
  });
};
