const selectAllProfessions = require("../models/professions-model");

const getAllProffessions = (req, res, next) => {
  selectAllProfessions().then((profs) => {
    res.status(200).send({ profs });
  });
  //   res.status(200).send("Getting professions");
};

module.exports = getAllProffessions;
