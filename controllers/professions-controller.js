const {
  selectAllProfessions,
  selectProfessionById,
} = require("../models/professions-model");

const getAllProffessions = (req, res, next) => {
  selectAllProfessions().then((profs) => {
    res.status(200).send({ profs });
  });
};

const getProfessionById = (req, res, next) => {
  const { prof_id } = req.params;
  selectProfessionById(prof_id).then((prof) => {
    res.status(200).send({ prof });
  });
};

module.exports = { getAllProffessions, getProfessionById };
