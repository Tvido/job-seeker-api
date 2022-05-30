const express = require("express");

const { joiSchema } = require("../../../schemas/favorite");
const {
  validation,
  controllerWrapper,
  // authenticate,
} = require("../../../middlewares");
const ctrl = require("../../../controllers/favorites");
const router = express.Router();

router.post("/", validation(joiSchema), controllerWrapper(ctrl.add));

router.get("/", ctrl.getAll);

module.exports = router;
