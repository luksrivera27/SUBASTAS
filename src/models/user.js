const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
  },
  fechaidExpedicion: {
    type: String,
    required: true,
    default: Date.now(),
  },
  fechaNacimiento: {
    type: String,
    required: true,
    default: Date.now(),
  },
  password: {
    type: String,
    required: true,
  },
  vpassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
