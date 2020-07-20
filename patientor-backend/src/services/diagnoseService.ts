import diagnoses from '../../data/diagnoses';
import { DiagnoseEntry, NonLatinDiagnoseEntry } from '../types';


const getEntry = (): DiagnoseEntry[] => {
  return diagnoses;

};

const getLatinOmitEntries = (): NonLatinDiagnoseEntry[] => {
  return diagnoses.map(({ code, name, latin }) => ({ code, name, latin }));
};

const addEntry = () => {
  return null;
};

export default {
  getEntry,
  addEntry,
  getLatinOmitEntries
};