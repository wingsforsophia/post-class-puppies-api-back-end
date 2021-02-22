var express = require('express');
var router = express.Router();
const puppyCtrl = require('../controllers/puppies')

router.get('/puppies', puppyCtrl.index)
router.get('/puppies/:id', puppyCtrl.show)
router.post('/puppies', puppyCtrl.create)
router.put('/puppies/:id', puppyCtrl.update)
router.delete('/puppies/:id', puppyCtrl.delete)

module.exports = router;
