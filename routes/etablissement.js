const express = require('express');
const router = express.Router();

const hebergCtrl = require('../controllers/etablissement');
const auth = require('../middleware/auth');
router.post('/createEtablissement',auth, hebergCtrl.createEtablissement);

module.exports = router;