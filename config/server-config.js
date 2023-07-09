const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_URL: process.env.CONNECTION_STRING,
};
