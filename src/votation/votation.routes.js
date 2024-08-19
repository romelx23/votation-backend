const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos, validarJWT } = require("../middlewares");
const {
  getVotations,
  getVotation,
  createVotation,
  getVotationsByUser,
  updateVotation,
  updateVotationVisibility
} = require("./votation.controller");
const { insertVotes } = require("../seed/votationSeed");

const router = Router();

router.get("/", [validarCampos], getVotations);

// endpoint para obtener las votaciones del usuario
router.get("/by-user", [validarJWT,validarCampos], getVotationsByUser);

router.get("/seed", [], insertVotes);

router.get(
  "/:id",
  [check("id", "No es un mongo ID").isMongoId(), validarCampos],
  getVotation
);

router.post("/", [validarCampos], createVotation);

router.put(
  "/:id",
  [check("id", "No es un mongo ID").isMongoId(), validarCampos],
  updateVotation
);

router.put(
  "/:id/visibility",
  [check("id", "No es un mongo ID").isMongoId(), validarCampos],
  updateVotationVisibility
);

module.exports = router;
