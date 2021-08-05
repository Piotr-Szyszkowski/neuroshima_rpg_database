const express = require("express");
const sendAllEndpoints = require("../controllers/api-controller");
const professionsRouter = require("./professions-router");
const apiRouter = express.Router();

apiRouter.get("/", sendAllEndpoints);

apiRouter.use("/professions", professionsRouter);

module.exports = apiRouter;
