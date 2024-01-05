const cutiController = require("../controllers/cuti.controller");
const router = require("express").Router();

router.get("/", cutiController.findAll);
router.post("/", cutiController.create);
router.put("/:id", cutiController.update);
router.delete("/:id", cutiController.delete);

module.exports = router;
