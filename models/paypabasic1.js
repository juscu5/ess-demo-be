/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paypabasic1', {
    dateto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
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
    tableName: 'paypabasic1'
  });
};
