const express = require("express");
const getAllProffessions = require("../controllers/professions-controller");
const professionsRouter = express.Router();

professionsRouter.route("/").get(getAllProffessions);

module.exports = professionsRouter;
