const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { query } = req;

  res.status(200).json({
    status: "ok",
    msg: "get API - controlador",
    query,
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
