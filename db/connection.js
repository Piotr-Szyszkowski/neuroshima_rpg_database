const { Pool } = require("pg");
const path = require(`path`);

const ENV = process.env.NODE_ENV || `production`;

require("dotenv").config({ path: path.join(__dirname, `..`, `.env.${ENV}`) });

const db = new Pool();

if (!process.env.PGDATABASE) {
  throw new Error("No PGDATABASE configured");
}

module.exports = db;
