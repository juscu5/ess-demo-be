/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empinfonewreq_tables', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tablename: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tablename_new: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tableid: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empinfonewreq_tables'
  });
};
