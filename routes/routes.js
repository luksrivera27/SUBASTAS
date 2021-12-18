const express = require("express");
const userModel = require("../models/models");
const subastaModel = require("../models/models");
const pujaModel = require("../models/models");
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.post("/add_subasta", async (request, response) => {
  const subasta = new subastaModel(request.body);

  try {
    await subasta.save();
    response.send(subasta);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/add_puja", async (request, response) => {
  const puja = new pujaModel(request.body);

  try {
    await puja.save();
    response.send(puja);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.post("/register", async (request, response)=>{
  const registro= await userModel(req.body);
  registro.save();
}
  module.exports = app;