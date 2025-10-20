const express = require("express");
const { Dashboardcontroller } = require("../../../controller/RolebasedAuth/Chairman/DashboardController");
const router = express.Router();

router.get("/totalresidence",Dashboardcontroller.totalResidence)

module.exports = router