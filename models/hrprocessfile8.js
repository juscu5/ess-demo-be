/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrprocessfile8', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    intvwerempcode: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    invwcritcde: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    invwlegendval: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    processcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processlvl: {
      type: DataTypes.STRING(100),
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
    tableName: 'hrprocessfile8'
  });
};
