require("dotenv").config();
const express = require("express");
const Router = require("./routes/routes")
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

/*
app.use("/user", require("./routes/userRouter"));
const router = express.Router();

router.get("/vendido", async (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
*/


//Conexión a mongoDB
/*
const MONGODB_URI=
mongoose.connect('mongodb+srv://MisionTIC:MisionTIC@cluster0.chti4.mongodb.net/cluster0?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
*/

app.use(Router);


//Arranque del servidor
app.set("port",process.env.PORT || 9000 );
//const PORT = process.env.PORT || 3000;
app.listen(app.get("port"), () => {
  console.log("El servidor ha arrancado en el puerto ", PORT);
});
