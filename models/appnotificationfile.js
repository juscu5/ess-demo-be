/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appnotificationfile', {
    approve: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hrstatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iscancel2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    module: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqsterfullname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sublevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submodule: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appnotificationfile'
  });
};
