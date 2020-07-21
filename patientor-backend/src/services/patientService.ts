import patients from '../../data/patients';
import { PatientEntry, NonSensetiveEntry } from '../types';


const getEntry = (): PatientEntry[] => {
  return patients;

};

const getNonSensetiveEntry = (): NonSensetiveEntry[]=>{
  return  patients.map(({id,name,dateOfBirth,gender,occupation})=>({id,name,dateOfBirth,gender,occupation}))
};

const addEntry = () => {
  return null;
};

export default {
  getEntry,
  addEntry,
  getNonSensetiveEntry
};