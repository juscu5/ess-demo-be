/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legendfile', {
    legcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    legdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    legorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    show_ess: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'legendfile'
  });
};
