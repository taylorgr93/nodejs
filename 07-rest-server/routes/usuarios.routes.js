const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPatch,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios.controller");

const router = Router();

router
  .get("/", usuariosGet)
  .post("/", usuariosPost)
  .patch("/", usuariosPatch)
  .put("/", usuariosPut)
  .delete("/", usuariosDelete);

module.exports = router;
