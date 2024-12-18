/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrprocessfile4', {
    AMPM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appstatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    encodercde: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    encodernme: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    evalcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    evalnme: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    islock: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    miltime: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pchrge: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    processcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    processlvl: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processtitle: {
      type: DataTypes.STRING(150),
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
    scheddte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    schedtime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    strthrs: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    strtmins: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hrprocessfile4'
  });
};
