/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sidebar1', {
    mendsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    picicon: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sidegrp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sortkey: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'sidebar1'
  });
};
