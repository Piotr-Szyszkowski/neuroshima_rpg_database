const express = require("express");
const professionsRouter = express.Router();

professionsRouter.route("/").get(() => {
  console.log("GET req received - professions");
});

module.exports = professionsRouter;
