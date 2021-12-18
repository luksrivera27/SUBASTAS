require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { mongoose } = require("./database");
//const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//Rutas
app.use("/user", require("./routes/userRouter"));
const router = express.Router();

router.get("/vendido", async (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Conexión a mongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("CONECTADO CON MONGODB"))
  .catch((Error) => console.error(Error));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

//Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("El servidor ha arrancado en el puerto ", PORT);
});
