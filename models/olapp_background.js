/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('olapp_background', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    oapp_bckgrnd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    oapp_bckgrnd_dir: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'olapp_background'
  });
};
