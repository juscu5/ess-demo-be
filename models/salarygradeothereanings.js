/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salarygradeothereanings', {
    amnt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    othercde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    otherdsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salarycode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salarygradeothereanings'
  });
};
