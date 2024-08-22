const { Router } = require("express");
const { validarCampos, validarJWT } = require("../middlewares");
const { shareVotation, getUserByVotation, deleteUserFromVotation, getSharedVotationByUser } = require("./shared-votation.controller");
// const { insertItems } = require("../seed/itemsSeed");
// const { insertAnimes } = require("../seed/animeSeed");

const router = Router();

// get shared votation by user

router.get("/shared-votation", [validarJWT,validarCampos], getSharedVotationByUser);

router.get("/:id", [validarJWT,validarCampos], getUserByVotation);

// router.get("/seed-anime", [], insertAnimes);

router.post("/", [validarJWT,validarCampos], shareVotation);

// delete user from votation

router.delete("/:id", [validarJWT,validarCampos], deleteUserFromVotation);

module.exports = router;
