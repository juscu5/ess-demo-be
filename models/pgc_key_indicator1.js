/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pgc_key_indicator1', {
    keycode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keydesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    keyloc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keyper: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keytitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pgc_key_indicator1'
  });
};
