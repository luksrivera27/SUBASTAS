const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  rol: {
    type: String,
    required: true,
  },
  ndocumento: {
    type: String,
    required: true,
  },
  fvinculacion: {
    type: Date,
    required: true,
  },
  fnacimiento: {
    type: Date,
    required: true,
  },
  fexpdoc: {
    type: Date,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  clave1: {
    type: String,
    required: true,
  },
  clave2: {
    type: String,
    required: true,
  },
  
});

const Usuario = mongoose.model("Usuario", UserSchema);

module.exports = Usuario;

const SubastaSchema = new mongoose.Schema({
  idsubasta: {
    type: Number,
    required: true,
  },
  producto: {
    type: String,
    required: true,
  },
  descpto: {
    type: String,
    required: false,
  },
  estsubasta: {
    type: String,
    required: true,
  },
  valorinicial: {
    type: Number,
    required: true,
    },
  valorfinal: {
    type: Number,
    required: true,
  },
  finicio: {
    type: Date,
    required: true,
  },
  ffinal: {
    type: Date,
    required: true,
  },
  idusuarioasignado: {
    type: Number,
    required: true,
  },
  curadorpto: {
    type: String,
    required: true,
  },
  idproducto: {
    type: Number,
    required: true,
  },
});

const Subasta = mongoose.model("Subasta", SubastaSchema);

module.exports = Subasta;

const PujaSchema = new mongoose.Schema({
  idpuja: {
    type: Number,
    required: true,
  },
  idsubasta: {
    type: Number,
    required: true,
  },
  idproducto: {
    type: Number,
    required: true,
  },
  estsubasta: {
    type: String,
    required: true,
  },
  valorpuja: {
    type: Number,
    required: true,
    },
  idusuariopuja: {
    type: Number,
    required: true,
  },
  fpuja: {
    type: Date,
    required: true,
  },
});

const Puja = mongoose.model("Puja", PujaSchema);

module.exports = Puja;


