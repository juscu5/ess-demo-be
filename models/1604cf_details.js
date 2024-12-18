/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('1604cf_details', {
    cremon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    creyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    penalty: {
      type: DataTypes.DECIMAL,
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
    remdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rorno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    taxadj: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    taxwit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totamt: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    trano: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: '1604cf_details'
  });
};
