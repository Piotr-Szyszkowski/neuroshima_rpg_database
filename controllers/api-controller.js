const sendAllEndpoints = (req, res, next) => {
  res.status(200).send({ msg: "Hiya" });
};

module.exports = sendAllEndpoints;
