/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrprocessfile5', {
    appcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    filepath: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pcharge: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    processlvl: {
      type: DataTypes.STRING(2),
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
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uploaddte: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hrprocessfile5'
  });
};
