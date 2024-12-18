/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeteachingxp', {
    dtefrm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dteto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reasonleaving: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salend: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salstrt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    school: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeeteachingxp'
  });
};
