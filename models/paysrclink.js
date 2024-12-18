/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paysrclink', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payout_comcde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payout_subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payout_uploadpath: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paysrclink'
  });
};
