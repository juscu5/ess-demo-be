/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantsiblings', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cage: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cbirthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ccivilstatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cemployement: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cgender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    connum: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cschool: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    menincapacity: {
      type: DataTypes.INTEGER,
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
    tableName: 'applicantsiblings'
  });
};
