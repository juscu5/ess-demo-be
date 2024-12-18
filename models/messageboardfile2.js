/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messageboardfile2', {
    attchment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    msgcont: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    tableName: 'messageboardfile2'
  });
};
