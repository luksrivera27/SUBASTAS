const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();


//register
//GET
router.get("/", async (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//POST
router.post("/", async (req, res) => {
  const user = await userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET un user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update a user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    correo,
    identification,
    fechaidExpedicion,
    fechaNacimiento,
    password,
    vpassword,
  } = req.body;
  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          correo,
          identification,
          fechaidExpedicion,
          fechaNacimiento,
          password,
          vpassword,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Deleted a user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
