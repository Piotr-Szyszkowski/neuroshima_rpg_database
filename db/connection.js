const { Pool } = require("pg");
const path = require(`path`);

const ENV = process.env.NODE_ENV || `development`;

require("dotenv").config({ path: path.join(__dirname, `..`, `.env.${ENV}`) });

const db = new Pool();

console.log(process.env.PGDATABASE);

if (!process.env.PGDATABASE) {
  throw new Error("No PGDATABASE configured");
}

module.exports = db;
