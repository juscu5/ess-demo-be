/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schednotificationfile', {
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    effectvedte: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_view: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_viewapp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oldshift: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndate: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'schednotificationfile'
  });
};
