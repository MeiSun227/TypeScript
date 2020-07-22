
export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
};

export type NonLatinDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;

export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
};
export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export type NonSensetiveEntry = Omit<PatientEntry, 'ssn'>;

export enum Gender {
    Female = 'female',
    Male = 'male'
}