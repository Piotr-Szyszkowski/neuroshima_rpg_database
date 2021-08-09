const { db } = require("../db/connection");

const selectAllProfessions = () => {
  return db.query("SELECT * FROM professions;").then((result) => {
    return result.rows;
  });
};

// const selectProfessionById = (prof_id) => {
//   return db
//     .query("SELECT * FROM professions where profession_id = $1;", [prof_id])
//     .then((result) => {
//       return result.rows[0];
//     });
// };

module.exports = { selectAllProfessions };
