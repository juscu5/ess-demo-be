/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile2l', {
    evalcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pmssetupfile2l_evalcde_unique"
    },
    evallevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile2l'
  });
};
