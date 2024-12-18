const { initLeaveReqUser } = require("./leave-req-user");
const { initMenus } = require("./menus");
const { initOvertimeReqUser } = require("./overtime-req-user");
const { initOfficialBusiness } = require("./official-business");
const { initUserEss } = require("./user-ess");
const {initDepartment} = require("./department");
const { initEmployee } = require("./employee");
const { initNews } = require("./news");


const router = require("express").Router();

const initRoutes = (app) => {

    router.use('/user-ess', initUserEss());
    router.use('/leave-req-user', initLeaveReqUser());
    router.use('/overtime-req-user', initOvertimeReqUser());
    router.use('/menus', initMenus());
    router.use('/official-business', initOfficialBusiness());
    router.use('/departments', initDepartment())
    router.use('/employees', initEmployee())
    router.use('/news', initNews());

    app.use("/api", router);
}
module.exports = {
    initRoutes
}