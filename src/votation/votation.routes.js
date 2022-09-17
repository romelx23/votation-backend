const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares");
const {
  getVotations,
  getVotation,
  createVotation,
} = require("./votation.controller");

const router = Router();

router.get("/", [validarCampos], getVotations);

router.get(
  "/:id",
  [check("id", "No es un mongo ID").isMongoId(), validarCampos],
  getVotation
);

router.post("/", [validarCampos], createVotation);

module.exports = router;
