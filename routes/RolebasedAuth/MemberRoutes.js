const express = require("express");
const { memberController } = require("../../controller/RolebasedAuth/MemberController");
const router = express.Router();
router.get("/member",memberController.residenceController)
router.get("/approve",memberController.ApproveController)
module.exports = router