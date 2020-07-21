import patients from '../../data/patients';
import { PatientEntry, NonSensetiveEntry,NewPatientEntry } from '../types';


const getEntry = (): PatientEntry[] => {
  return patients;

};

const getNonSensetiveEntry = (): NonSensetiveEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({ id, name, dateOfBirth, gender, occupation }))
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: Math.random().toString(36),
    ...entry
  }
  patients.push(newPatientEntry)
  return(newPatientEntry)
  
};

export default {
  getEntry,
  addPatient,
  getNonSensetiveEntry
};