const { getLeaveRequestsByStatus, getLeaveRequestsByFilter, getLeaveBenefits, getLeaveDayFile, addSingleData, addMultipleData } = require("../services/leave-req-user");
const { isUserExists, getShiftSchedule } = require("../utilities/requisition");
const { authMiddleware } = require("./auth");

const router = require("express").Router();

const initLeaveReqUser = () => {
  
  router.get("/by_status", authMiddleware, async (req,  res) =>{
    const { status, offset, limit } = req.query;
    const empcode = req.parsedToken.data.usrcde;

    try {
      const user = await isUserExists(empcode);
      if (!user) {
        res.status(404).json({status: 'Error', code: 400, payload: 'User does not exist'});
        return;
      }

      const data = await getLeaveRequestsByStatus(empcode, status, offset, limit);
      res.status(200).json({status: 'Success', code: 200, payload: data});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  router.get("/by_filter", authMiddleware, async (req,res) =>{
    const { status, filter, value, offset, limit } = req.query;
    const empcode = req.parsedToken.data.usrcde;

    try {
      const user = await isUserExists(empcode);
      if (!user) {
        res.status(404).json({status: 'Error', code: 400, payload: 'User does not exist'});
        return;
      }

      const data = await getLeaveRequestsByFilter(empcode, status, filter, value, offset, limit);
      res.status(200).json({status: 'Success', code: 200, payload: data});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  router.get("/shift_sched", authMiddleware, async (req,res) => {
    const { subdrycde, date } = req.query;
    const empcode = req.parsedToken.data.usrcde;

    try {
      const user = await isUserExists(empcode);
      if (!user) {
        res.status(404).json({status: 'Error', code: 400, payload: 'User does not exist'});
        return;
      }

      const shiftSchedule = await getShiftSchedule(empcode, subdrycde, date);
      res.status(200).json({status: 'Success', code: 200, payload: shiftSchedule});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  router.get("/add_leave_data", authMiddleware, async (req,res) =>{
    const { subdrycde, leave_mode } = req.query;
    const empcode = req.parsedToken.data.usrcde;

    try {
      const user = await isUserExists(empcode);
      if (!user) {
        res.status(404).json({status: 'Error', code: 400, payload: 'User does not exist'});
        return;
      }
      
      const leaveBenefits = await getLeaveBenefits(empcode);
      let leaveDayFile;
      if (leave_mode === 'day') {
        leaveDayFile = await getLeaveDayFile(subdrycde);
      }

      res.status(200).json({status: 'Success', code: 200, payload: { leaveBenefits, ...(leave_mode==='day' && {leaveDayFile}) }});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  router.post('/add_single_leave_data', authMiddleware, async (req, res) => {
    const { leavereqfile2data, leavesfile1data } = req.body;

    try {
      await addSingleData(leavereqfile2data, leavesfile1data);
      res.status(200).json({status: 'Success', code: 200, payload: {msg : 'Data has been added successfully'}});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  router.post("/add_multiple_leave_data", authMiddleware, async (req, res) => {
    const { dateFrom, dateTo, includeHolidays } = req.query;
    const { daysNotIncluded, leavereqfile2data, leavesfile1data } = req.body;

    try {
      await addMultipleData(dateFrom, dateTo, daysNotIncluded, includeHolidays, leavereqfile2data, leavesfile1data);
      res.status(200).json({status: 'Success', code: 200, payload: {msg : 'Data has been added successfully'}});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  return router;
}

module.exports = {
  initLeaveReqUser
}