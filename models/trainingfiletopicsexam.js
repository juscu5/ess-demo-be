/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfiletopicsexam', {
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
    topiccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    topicexamcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    topicexamdsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    topicexamtotscore: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trngcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingfiletopicsexam'
  });
};
