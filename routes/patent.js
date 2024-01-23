var express = require('express');
const { showAllPatient, addPatient, updatePatient, deletePatient } = require('../controller/patient');
var router = express.Router();


/* GET users listing. */
router.get('/patient',showAllPatient);
router.post('/patient',addPatient);
router.put('/patient/:id',updatePatient);
router.delete('/patient/:id',deletePatient);

module.exports = router;
