/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empreqfile2', {
    cbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cgender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    menincapacity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'empreqfile2'
  });
};
