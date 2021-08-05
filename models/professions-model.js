const { db } = require("../db/connection");

const selectAllProfessions = () => {
  return db.query("SELECT * FROM professions;").then((result) => {
    return result.rows;
  });
};
//   console.log("prof model firing");

module.exports = selectAllProfessions;
