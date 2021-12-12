const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const useRoutes = require("./routes/user");
const { mongoose } = require("./database");
const app = express();

//settings
app.set("port", process.env.PORT || 9000);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/vendido", require("./routes/user"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//starting serves

app.use(express.json());
app.use("/api", useRoutes);

app.listen(app.get("port"), () => {
  console.log("Serve on");
});

// ReactDOM.render(<App /, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
