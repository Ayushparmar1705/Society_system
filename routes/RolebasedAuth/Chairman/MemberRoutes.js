const express = require("express");
const { memberController } = require("../../../controller/RolebasedAuth/Chairman/MemberController");
const router = express.Router();
router.get("/member/:society_name",memberController.residenceController)
router.get("/approve",memberController.ApproveController)
module.exports = router