/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmssetupfile_lst', {
    crit_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    crit_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    seccde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmssetupfile_lst'
  });
};
