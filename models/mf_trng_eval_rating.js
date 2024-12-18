/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mf_trng_eval_rating', {
    eval_formcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ratingcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ratingdesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ratinglevel: {
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
    tableName: 'mf_trng_eval_rating'
  });
};
