const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPatch,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", usuariosGet).post("/", usuariosPost);

router
  .patch("/:id", usuariosPatch)
  .put("/:id", usuariosPut)
  .delete("/:id", usuariosDelete);

module.exports = router;
