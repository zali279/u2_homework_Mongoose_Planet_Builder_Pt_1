const express = require('express');
const router = express.Router();
const planetsCtrl = require('../controllers/planets')

router.get('/',planetsCtrl.index)
router.get("/new",planetsCtrl.newPlanet)

router.post('/',planetsCtrl.createPlanet)






module.exports = router;

