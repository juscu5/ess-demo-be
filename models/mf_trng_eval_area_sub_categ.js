/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mf_trng_eval_area_sub_categ', {
    eval_areacode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eval_subcategcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eval_subcategdesc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    eval_subcateg_sortorder: {
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
    tableName: 'mf_trng_eval_area_sub_categ'
  });
};
