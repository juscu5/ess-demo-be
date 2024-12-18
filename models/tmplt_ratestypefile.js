/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmplt_ratestypefile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "MODIFIED BY LstvPoco ON 16.09.22 17:48"
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ratestype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    initial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmplt_ratestypefile'
  });
};
