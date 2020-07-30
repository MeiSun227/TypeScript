import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import { useStateValue, getPatientById, setDiagnosisList } from "../state";
import { apiBaseUrl } from "../constants";
import { Patient, Diagnosis } from "../types";
import PatientInfo from "../components/Patient";

const PatientInfoPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [{ patients, diagnoses}, dispatch] = useStateValue();

    let patient = { ...patients[id] };
    useEffect(() => {
        const fetchPatientList = async () => {
            try {
                const { data: patientFromApi } = await axios.get<Patient>(
                    `${apiBaseUrl}/patients/${id}`
                );
                dispatch(getPatientById(patientFromApi));
            } catch (e) {
                console.error(e);
            }
        };
        const fetchDiagnosesList = async () => {
            try {
                const { data: diagnosesFromApi } = await axios.get<Diagnosis[]>(
                    `${apiBaseUrl}/diagnoses`
                );
                dispatch(setDiagnosisList(diagnosesFromApi));
            } catch (e) {
                console.error(e);
            }
        };
        fetchPatientList();
        fetchDiagnosesList();
    }, [id, dispatch]);

    return (
        <PatientInfo name={patient.name} ssn={patient.ssn} id={patient.id} occupation={patient.occupation} gender={patient.gender} entries={patient.entries} diagnoses={diagnoses}/>
    )
}

export default PatientInfoPage;