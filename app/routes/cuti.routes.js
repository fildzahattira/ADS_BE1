const cutiController = require('../controllers/cuti.controller');
const router = require('express').Router();

router.get('/', cutiController.findAll);
router.post('/',cutiController.create);
router.put('/:Nomor_Induk/:id', cutiController.update);
router.delete('/:Nomor_Induk',cutiController.delete);



module.exports = router;