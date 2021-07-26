const path = require(`path`);
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { Pool } = require("pg");

const db = new Pool();

console.log(process.env.PGDATABASE);

if (!process.env.PGDATABASE) {
  throw new Error("No PGDATABASE configured");
}

module.exports = { db };
