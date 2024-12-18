/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empreqfile', {
    approve: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "PENDING"
    },
    appvcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appvdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    appvtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    attachment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fielddesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fieldname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    new_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    old_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqdte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reqnum: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tablename: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empreqfile'
  });
};
