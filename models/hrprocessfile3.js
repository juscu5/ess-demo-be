/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrprocessfile3', {
    AMPM: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    jobvac: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(2),
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
    processdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    processdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    processlvl: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    processtitle: {
      type: DataTypes.STRING(100),
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
      type: DataTypes.STRING(2),
      allowNull: true
    },
    strtmins: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hrprocessfile3'
  });
};
