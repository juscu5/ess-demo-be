/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingfiletopics', {
    day_index: {
      type: DataTypes.STRING(50),
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
    timefrm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    timeto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    topiccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    topicdsc: {
      type: DataTypes.STRING(150),
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
    tableName: 'trainingfiletopics'
  });
};
