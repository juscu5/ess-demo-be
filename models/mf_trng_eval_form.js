/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mf_trng_eval_form', {
    eval_formcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eval_formdesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    is_spokeperson: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trntypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mf_trng_eval_form'
  });
};
