/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrprocessfile2', {
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empstatus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    intvwerempcode: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    intvwerfullname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_restricted: {
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    processlvl: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    processtitle: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    recdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    recstat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hrprocessfile2'
  });
};
