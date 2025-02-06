const { response } = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");

const usuariosGet = (req, res = response) => {
  const { query } = req;

  res.status(200).json({
    status: "ok",
    msg: "get API - controlador",
    query,
  });
};

const usuariosPost = async (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { name, email, password, role } = req.body;
  const usuario = new Usuario({ name, email, password, role });

  // Verificar si el correo existe
  const emailExist = await Usuario.findOne({ email });
  if (!emailExist) {
    return res.status(400).json({ message: "El correo ya esta registrado" });
  }

  // Encriptar la contraseña
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  // Guardar en DB
  await usuario.save();

  res.status(200).json(usuario);
};

const usuariosPatch = (req, res = response) => {
  res.status(200).json({
    status: "ok",
    msg: "patch API - controlador",
  });
};

const usuariosPut = (req, res = response) => {
  const { body, params } = req;
  const { id } = params;

  res.status(200).json({
    status: "ok",
    msg: "put API - controlador",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.status(200).json({
    status: "ok",
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPatch,
  usuariosPut,
  usuariosDelete,
};
