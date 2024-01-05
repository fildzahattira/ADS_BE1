const karyawanController = require('../controllers/karyawan.controller');
const router = require('express').Router();

router.get('/', karyawanController.findAll);
router.get('/cuti/:Nomor_Induk', karyawanController.findAllC);
router.post('/', karyawanController.create);
router.put('/:Nomor_Induk', karyawanController.update);
router.delete('/:Nomor_Induk', karyawanController.delete);
router.get('/sorted', karyawanController.findAll);
  

module.exports = router;