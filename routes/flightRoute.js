const express = require("express");

const router = express.Router();
const controller = require("./../controllers/flightController");

router.route("/").get(controller.getAllFlight).post(controller.bookFlight);
router
  .route("/:id")
  .get(controller.getFlight)
  .patch(controller.updateFlight)
  .delete(controller.deleteUser);

module.exports = router;
