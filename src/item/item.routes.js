const { Router } = require("express");
const { validarCampos } = require("../middlewares");
const { postItems } = require("./item.controller");
const { insertItems } = require("../seed/itemsSeed");
// const { insertAnimes } = require("../seed/animeSeed");

const router = Router();

router.get("/seed", [], insertItems);

// router.get("/seed-anime", [], insertAnimes);

router.post("/", [validarCampos], postItems);

module.exports = router;
