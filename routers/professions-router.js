const express = require("express");
const {
  getAllProffessions,
  getProfessionById,
} = require("../controllers/professions-controller");
const professionsRouter = express.Router();

professionsRouter.route("/").get(getAllProffessions);
// professionsRouter.route("/:prof_id").get(getProfessionById);

module.exports = professionsRouter;
