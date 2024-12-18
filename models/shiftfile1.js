/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shiftfile1', {
    customkeyword: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    latepolicy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    setdifftime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    shiftcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shiftdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    uselatepolicy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shiftfile1'
  });
};
