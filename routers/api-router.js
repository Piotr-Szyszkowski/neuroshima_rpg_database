const express = require("express");
const { professionsRouter } = require("./professions-router");
const apiRouter = express.Router();

apiRouter.route("/").get(() => {
  console.log("GET req received - api");
});

apiRouter.use("/professions", professionsRouter);

module.exports = { apiRouter };
