/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appempadditionalfile', {
    afpsrvcbranch: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    badgeno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    basicsupervisorycrs: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    basicsupervisorycrsachvmnt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    basicsupervisorycrsaddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    basicsupervisorycrsyrattnded: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    company_union: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    convicted1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    convicted1_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    convicted2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    convicted2_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    diffshift: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "appempadditionalfile_empcode_unique"
    },
    expiredte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    have_relative: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hobbies_skils: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    how_know_jo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    illphy_defects: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    illphy_defects_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    labor_federation: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    member_lu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    militaryschool: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    militaryschoolachvmnt: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    militaryschooladdress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    militaryschoolyrattnded: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    noyrssrvc: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: "0"
    },
    pending_crimcivlab: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pending_crimcivlab_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    postedany: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prelicensingachvmnt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    prelicensingaddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prelicensingschool: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    prelicensingyrattnded: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    refreshertrngcrs: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    refreshertrngcrsachvmnt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    refreshertrngcrsaddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    refreshertrngcrsyrattnded: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    relative_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    relative_position: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    relative_relation: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    retired_dismissed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retired_dismissed_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rnktitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sbrno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    securitylicno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    where_know_jo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    whom_know_jo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    who_recommend: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    who_recommend_add: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    who_recommend_contact: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appempadditionalfile'
  });
};
