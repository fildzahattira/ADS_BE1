const karyawanController = require("../controllers/karyawan.controller");
const router = require("express").Router();

router.get("/", karyawanController.findAll);
router.get("/cuti/:Nomor_Induk", karyawanController.findKaryawanWithCuti);
router.post("/", karyawanController.create);
router.put("/:Nomor_Induk", karyawanController.update);
router.delete("/:Nomor_Induk", karyawanController.delete);

module.exports = router;
