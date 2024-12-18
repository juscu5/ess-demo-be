

const defineLeavesFile1Relations = (models) => {
  const { leavesfile1, leavereqfile2 } = models;

  leavesfile1.hasMany(leavereqfile2, {
    foreignKey: 'leavedocnum',
    sourceKey: 'leavedocnum',
    targetKey: 'leavedocnum',
  });
}

const defineEmpDefLeaveRelations = (models) => {
  const { empdefleave, leavesfile } = models;

  empdefleave.hasOne(leavesfile, {
    foreignKey: 'leavescode',
    sourceKey: 'leavescode',
    targetKey: 'leavescode',
  });

}

const defineOvertimeFile1Relations = (models) => {
  const { overtimefile1, overtimereqfile2 } = models;

  overtimefile1.hasMany(overtimereqfile2, {
    foreignKey: 'otdocnum',
    sourceKey: 'otdocnum',
    targetKey: 'otdocnum',
  });
}


const defineOfficialBusinessRelations = (models) => {
  const { obfile1, obreqfile2 } = models;

  obfile1.hasOne(obreqfile2, {
    foreignKey: 'obdocnum',
    sourceKey: 'obdocnum',
    targetKey: 'obdocnum',
  });
}


// const defineOvertimeFile1Relations = async (sequelize) => {
//   const {models} = sequelize;

//   const departmentfile = models.departmentfile;
//   const employeefile = models.employeefile;


//   departmentfile.hasMany(employeefile, {foreignKey: 'deptcode', sourceKey: 'deptcode'});
//   employeefile.belongsTo(departmentfile, {foreignKey: 'deptcode', targetKey: 'deptcode'});

// }

module.exports = {
  defineLeavesFile1Relations,
  defineEmpDefLeaveRelations,
  defineOvertimeFile1Relations,
  defineOfficialBusinessRelations
}