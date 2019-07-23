const express = require('express');
const router = express.Router();
//
const cors = require('cors');
router.use(cors());

//
router.use('/', express.static('./'));
router.use('/phaser', express.static('./phaser3'));
router.use('/controllers', express.static('./controllers'));


module.exports = router;