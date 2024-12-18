const { getOvertimeRequestsByStatus, getOvertimeRequestsByFilter, addSingleOvertimeRequest, addMultipleOvertimeRequest } = require("../services/overtime-req-user");
const { isUserExists, getShiftSchedule } = require("../utilities/requisition");
const { authMiddleware } = require("./auth");

const router = require("express").Router();

const initOvertimeReqUser = () => {
  
  router.get("/by_status", authMiddleware, async (req,res) =>{
    const { status, offset, limit } = req.query;
    const empcode = req.parsedToken.data.usrcde;

    try {
      const user = await isUserExists(empcode);
      if (!user) {
        res.status(404).json({status: 'Error', code: 400, payload: 'User does not exist'});
        return;
      }
      
      const data = await getOvertimeRequestsByStatus(empcode, status, offset, limit);
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

      const data = await getOvertimeRequestsByFilter(empcode, status, filter, value, offset, limit);
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

  router.post("/add_single_ot_request", authMiddleware, async (req,res) => {
    const { overtimefile1data, overtimereqfile2data } = req.body;

    try {
      await addSingleOvertimeRequest(overtimefile1data, overtimereqfile2data);
      res.status(200).json({status: 'Success', code: 200, payload: {msg : 'Data has been added successfully'}});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  router.post("/add_multiple_ot_request", authMiddleware, async (req,res) => {
    const { dateFrom, dateTo, includeHolidays } = req.query;
    const { daysNotIncluded, overtimefile1data, overtimereqfile2data } = req.body;

    try {
      await addMultipleOvertimeRequest(dateFrom, dateTo, daysNotIncluded, includeHolidays, overtimefile1data, overtimereqfile2data);
      res.status(200).json({status: 'Success', code: 200, payload: {msg : 'Data has been added successfully'}});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  return router;
}

module.exports = { initOvertimeReqUser };