/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reminders1', {
    datebound: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deadline: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(255),
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
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reminders1'
  });
};
