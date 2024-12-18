/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repreportheading', {
    head1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head13: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head14: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head15: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head16: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head17: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head18: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head19: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head20: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head21: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head22: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head23: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head24: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head25: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head26: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head27: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head28: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head29: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head30: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head31: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    headingkey: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "repreportheading_headingkey_unique"
    },
    month1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    month2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'repreportheading'
  });
};
