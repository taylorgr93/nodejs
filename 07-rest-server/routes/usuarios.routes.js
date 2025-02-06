const { Router } = require("express");
const { check } = require("express-validator");
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
  .post(
    "/",
    [check("email", "El correo no es válido").isEmail()],
    usuariosPost
  );

router
  .patch("/:id", usuariosPatch)
  .put("/:id", usuariosPut)
  .delete("/:id", usuariosDelete);

module.exports = router;
