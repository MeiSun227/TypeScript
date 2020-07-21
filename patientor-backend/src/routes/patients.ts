import express from 'express';
import patientService from '../services/patientService';



const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
    res.send(patientService.getNonSensetiveEntry())
})

patientRouter.post('/', (req, res) => {
    const {name, dateOfBirth, gender, occupation, ssn } = req.body;
    const newPatientEntry = patientService.addPatient({
        name,
        dateOfBirth,
        gender,
        occupation,
        ssn
    });

    res.json(newPatientEntry);
});
export default patientRouter;