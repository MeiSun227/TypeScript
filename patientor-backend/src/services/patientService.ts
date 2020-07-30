import patients from '../../data/patientswithEntries';
import { PatientEntry, NonSensetiveEntry, NewPatientEntry } from '../types';


const getEntry = (): PatientEntry[] => {
  return patients;

};

const getNonSensetiveEntry = (): NonSensetiveEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries}) => ({ id, name, dateOfBirth, gender, occupation,entries }))
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: Math.random().toString(36),
    ...entry
  }
  patients.push(newPatientEntry)
  return (newPatientEntry)
};

const getPatientById = (id: string): PatientEntry | undefined => {
  const entry = patients.find(p => p.id === id);
  return entry;

}
export default {
  getEntry,
  addPatient,
  getNonSensetiveEntry,
  getPatientById
};