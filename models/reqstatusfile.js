/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reqstatusfile', {
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    img_class: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqstatcde: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reqstatusfile'
  });
};
