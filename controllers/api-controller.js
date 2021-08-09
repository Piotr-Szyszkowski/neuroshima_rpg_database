const allEndpoints = require("../all-endpoints");
allEndpoints;
const sendAllEndpoints = (req, res, next) => {
  res.status(200).send({ endpoints: { ...allEndpoints } });
};

module.exports = sendAllEndpoints;
