const { Sequelize } = require("sequelize");
const { defineLeavesFile1Relations, defineEmpDefLeaveRelations, defineNewsFile1Relations, defineOfficialBusinessRelations } = require("./relations");



const environment = process.argv[2] || "dev";

const config = require(`../config/config.${environment}.json`);

console.log(config);


const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    },
    timezone: "+08:00",
    logging: false
});

const modelDefiners = [
    require('../models/users_ess'),
    require('../models/leavesfile1'),
    require('../models/approver_policy_file5'),
    require('../models/leavesfile'),
    require('../models/leavereqfile2'),
    require('../models/empdefleave'),
    require('../models/shiftfile2'),
    require('../models/employeefile'),
    require('../models/leavedayfile'),
    require('../models/syspar'),
    require('../models/holidayfile'),
    require('../models/overtimefile1'),
    require('../models/overtimereqfile2'),
    require('../models/menus'),
    require('../models/obfile1'),
    require('../models/approver_policy_file4'),
    require('../models/departmentfile'),
    require('../models/newsfile1'),
    require('../models/newsfile2'),
    require('../models/obreqfile2')
]

const relationsDefiners = [
  defineLeavesFile1Relations,
  defineEmpDefLeaveRelations,
  defineOfficialBusinessRelations
]

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

for (const relationDefiner of relationsDefiners) {
  relationDefiner(sequelize.models);
}

module.exports = sequelize;