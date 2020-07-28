
export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
};

export type NonLatinDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;

export interface Entry {
}

export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
    entries: Entry[];
}; 

export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export type PublicPatient = Omit<PatientEntry, 'ssn'|'entries' >

export type NonSensetiveEntry = Omit<PatientEntry, 'ssn'>;

export enum Gender {
    Female = 'female',
    Male = 'male'
}