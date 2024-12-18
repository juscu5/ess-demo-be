/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phdiskfile2', {
    diskno: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ecm1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ecm2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    ecm3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    effdte: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcom: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    empnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empsta: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pbrdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pbrnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pcm1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pcm2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    pcm3: {
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
    repqtr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    reptyp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    repyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phdiskfile2'
  });
};
