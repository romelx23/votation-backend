const { Router } = require("express");
const { validarCampos } = require("../middlewares");
const { postItems } = require("./item.controller");
const { insertItems } = require("../seed/itemsSeed");

const router = Router();

router.get("/seed", [], insertItems);

router.post("/", [validarCampos], postItems);

module.exports = router;
