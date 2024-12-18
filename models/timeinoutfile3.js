/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeinoutfile3', {
    actdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    autoauthot: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    autodedbrkmins: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    autootded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cday: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    chkcot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    computecotautoded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtearlyotin1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtearlyotout1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtin4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dtout4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    paydte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    startotdedaftr: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    usrcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'timeinoutfile3'
  });
};
