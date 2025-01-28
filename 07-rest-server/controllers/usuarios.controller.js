const { response } = require("express");

const usuariosGet = (req, res = response) => {
  res.status(200).json({
    status: "ok",
    msg: "get API - controlador",
  });
};

const usuariosPost = (req, res = response) => {
  const { body } = req;

  res.status(200).json({
    status: "ok",
    msg: "post API - controlador",
    body,
  });
};

const usuariosPatch = (req, res = response) => {
  res.status(200).json({
    status: "ok",
    msg: "patch API - controlador",
  });
};

const usuariosPut = (req, res = response) => {
  res.status(200).json({
    status: "ok",
    msg: "put API - controlador",
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
