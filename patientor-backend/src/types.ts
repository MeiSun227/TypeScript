
export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
};

export type NonLatinDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;

export interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<DiagnoseEntry['code']>
}
export enum Gender {
    Female = 'female',
    Male = 'male'
}
export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}

export interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}
export interface HospitalEntry extends BaseEntry{
    type: "Hospital";
    discharge: Discharge;

}

export interface OccupationalHealthcareEntry extends BaseEntry{
    type: 'OccupationalHealthcare';
    employerName:string;
    sickLeave?: SickLeave;
}

export interface Discharge {
    date:string;
    criteria: string;
}

export interface SickLeave{
    startDate: string;
    endDate:string;
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

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry

export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export type PublicPatient = Omit<PatientEntry, 'ssn' | 'entries'>

export type NonSensetiveEntry = Omit<PatientEntry, 'ssn'>;



export interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

