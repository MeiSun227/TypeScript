import patients from '../../data/patientswithEntries';
import { PatientEntry, NonSensetiveEntry, NewPatientEntry, NewEntry, Entry } from '../types';

let allPatients = [...patients];

const getEntry = (): PatientEntry[] => {
  return allPatients;
};

const getNonSensetiveEntry = (): NonSensetiveEntry[] => {
  return allPatients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({ id, name, dateOfBirth, gender, occupation, entries }))
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: Math.random().toString(36),
    ...entry
  }
  allPatients.push(newPatientEntry)
  return (newPatientEntry)
};

const getPatientById = (id: string): PatientEntry | undefined => {
  const entry = allPatients.find(p => p.id === id);
  return entry;
}

const addEntryById = (id: string, entryWithoutId: NewEntry): PatientEntry => {
  let patient = allPatients.filter(patient => patient.id === id)[0]
  const createdEntry: Entry = { ...entryWithoutId, id: Math.random().toString(36)};
  const savedPatient = { ...patient, entries: patient.entries.concat(createdEntry) };
  allPatients = allPatients.map(patient => patient.id === savedPatient.id ? savedPatient : patient)
  return savedPatient
}

export default {
  getEntry,
  addPatient,
  getNonSensetiveEntry,
  getPatientById,
  addEntryById
};