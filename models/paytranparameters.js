/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paytranparameters', {
    paytrannum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paytransort: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paytrantypcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    paytrantypdsc: {
      type: DataTypes.STRING(50),
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
    tableName: 'paytranparameters'
  });
};
