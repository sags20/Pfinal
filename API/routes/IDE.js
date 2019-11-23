var express = require('express');
var router = express.Router();
var IDEController = require('../controllers/IDEController')

/* GET users listing. */
router.get('/:nombre', IDEController.getOne);
router.get('/', IDEController.getAll);

router.post('/',IDEController.register);
router.put('/:nombre', IDEController.update);
router.delete('/:nombre',IDEControlleru.delete);

module.exports = router;
