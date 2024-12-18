/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetsfile', {
    acqdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    assetcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    assetdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    asset_stacode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    asset_typcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    attachment: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    attch: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    attch_path: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    barcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    brandcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categorycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    costcenter: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    curdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deldte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    depperiod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    invprice: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locationcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    locfloor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    locroom: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    prno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sernum: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    showcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sino: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subcat: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    subcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vendor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    war_end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    war_strt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assetsfile'
  });
};
