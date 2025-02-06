const { Router } = require("express");
const { check } = require("express-validator");
const {
  usuariosGet,
  usuariosPost,
  usuariosPatch,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios.controller");
const { validatCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/", usuariosGet).post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no es válido").isEmail(),
    check("password", "El password debe de ser de 6 letras").isLength({
      min: 6,
    }),
    check("role", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validatCampos,
  ],
  usuariosPost
);

router
  .patch("/:id", usuariosPatch)
  .put("/:id", usuariosPut)
  .delete("/:id", usuariosDelete);

module.exports = router;
