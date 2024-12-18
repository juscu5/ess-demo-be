/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reminders', {
    content: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    done: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dte_modified: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dte_posted: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrcde: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reminders'
  });
};
