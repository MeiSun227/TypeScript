import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';



const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
    res.send(patientService.getNonSensetiveEntry())
})

patientRouter.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);

        const addedEntry = patientService.addPatient(newPatientEntry)
        res.json(addedEntry);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

patientRouter.get('/:id',(_req, res)=>{
    const patient= patientService.getPatientById(_req.params.id)

    if(patient){
        res.send(patient)
    } else{
        res.sendStatus(404)
    }

})


export default patientRouter;