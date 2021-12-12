const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("CONECTADO CON MONGODB"))
  .catch((Error) => console.error(Error));

module.exports = mongoose;
