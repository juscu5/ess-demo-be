/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('complocationfile', {
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    area: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    conperson: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    conposition: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    loccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    town: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'complocationfile'
  });
};
