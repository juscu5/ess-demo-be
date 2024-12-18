/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salarygradeleave', {
    availablehr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    leavecde: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    leavedsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salarycode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salarygradeleave'
  });
};
