import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import { useStateValue,getPatientById } from "../state";
import { apiBaseUrl } from "../constants";
import { Patient } from "../types";
import PatientInfo from "../components/Patient";


const PatientInfoPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [{ patients }, dispatch] = useStateValue();

    console.log(patients)
    let patient = { ...patients[id] };
    console.log(patient)

    useEffect(() => {
        const fetchPatientList = async () => {
            try {
                const { data: patientFromApi } = await axios.get<Patient>(
                    `${apiBaseUrl}/patients/${id}`
                );
                dispatch(getPatientById(patientFromApi) );
            } catch (e) {
                console.error(e);
            }
        };
        fetchPatientList();
    }, [id,dispatch]);

    return (
        <PatientInfo name={patient.name}ssn={patient.ssn} id={patient.id} occupation={patient.occupation} gender={patient.gender} entries={patient.entries} />
    )
}

export default PatientInfoPage;