/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userlocationfile', {
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    distance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ismock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    obdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    timecheckedin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    timediff: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    timereceived: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usrname: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userlocationfile'
  });
};
