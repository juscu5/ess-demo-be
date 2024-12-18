/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postschedfile', {
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    postingdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    posttime: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processed: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
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
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_posted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    module: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    postdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'postschedfile'
  });
};
