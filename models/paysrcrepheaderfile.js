/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paysrcrepheaderfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    uploads: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paysrcrepheaderfile'
  });
};
