/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mf_trng_eval_essay', {
    essaycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    essaydesc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    eval_formcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mf_trng_eval_essay'
  });
};
