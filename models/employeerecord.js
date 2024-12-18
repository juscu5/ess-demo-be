/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeerecord', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comadd: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comdsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    datehired: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datehiredstr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dateterm: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datetermstr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empsal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    firstpos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    lastpos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    lenstay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    resleave: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeerecord'
  });
};
