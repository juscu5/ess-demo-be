/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messageboardfile1', {
    attchment: {
      type: DataTypes.STRING(200),
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
    },
    xmessage: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    xtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    xwhen: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    xwhere: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    xwho: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chatcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    msgcount: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    msgstat: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    msgtitle: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recpntcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sendrcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'messageboardfile1'
  });
};
