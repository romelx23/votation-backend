const { Router } = require("express");
const { validarCampos } = require("../middlewares");
const { postItems } = require("./item.controller");

const router = Router();

router.post("/", [validarCampos], postItems);

module.exports = router;
