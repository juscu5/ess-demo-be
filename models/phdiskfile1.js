/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phdiskfile1', {
    diskno: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    numemp1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    numemp2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    numemp3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paiddte1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paiddte2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paiddte3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pbrnum1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    pbrnum2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    pbrnum3: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    phildiskempadd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildiskempid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phildiskempnam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phildisksignam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phildisksigpos: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    },
    totcon: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totcon1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totcon2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    totcon3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'phdiskfile1'
  });
};
