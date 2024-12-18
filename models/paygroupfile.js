/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paygroupfile', {
    bankcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    curcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    laborcost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    newpaygroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    oldpaygroup: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    paycycle: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "paygroupfile_paygroup_subdrycde_unique"
    },
    ratelimit: {
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
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "paygroupfile_paygroup_subdrycde_unique"
    },
    '13compcode': {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paygroupfile'
  });
};
