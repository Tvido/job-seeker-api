const mongoose = require("mongoose");
require("dotenv").config();
const app = require("../app");

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
