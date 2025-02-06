const { response } = require("express");
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
  const { body } = req;
  const usuario = new Usuario(body);

  await usuario.save();

  res.status(200).json({
    // status: "ok",
    msg: "post API - controlador",
    usuario,
  });
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
